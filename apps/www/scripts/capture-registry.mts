import { existsSync, readFileSync } from "node:fs"
import { mkdir } from "node:fs/promises"
import path from "path"
import puppeteer, { type Page } from "puppeteer"

const SCREENSHOTS_BASE = path.join(process.cwd(), "public")

/** Only blocks and examples; exclude registry/eldoraui components (registry:ui, registry:component). */
const CAPTURE_TYPES = [
  "registry:block",
  "registry:example",
  "registry:internal",
] as const

/** Map registry type to screenshot folder. */
function getScreenshotFolder(type: string): "blocks" | "examples" {
  switch (type) {
    case "registry:block":
    case "registry:internal":
      return "blocks"
    case "registry:example":
      return "examples"
    default:
      return "blocks"
  }
}

interface ViewableItem {
  name: string
  type: string
}

/** Get registry items to capture: blocks and examples only (no eldoraui components). */
function getViewableItems(options?: {
  blocksOnly?: boolean
}): ViewableItem[] {
  const registryPath = path.join(process.cwd(), "public/r/registry.json")
  const fallbackPath = path.join(process.cwd(), "registry.json")
  const jsonPath = existsSync(registryPath) ? registryPath : fallbackPath

  if (!existsSync(jsonPath)) {
    throw new Error(
      "Registry not found. Run pnpm build:registry first to generate public/r/registry.json"
    )
  }

  const content = readFileSync(jsonPath, "utf8")
  const data = JSON.parse(content) as { items?: Array<{ name: string; type?: string }> }
  const items = data.items ?? []

  const types: readonly string[] = options?.blocksOnly
    ? ["registry:block", "registry:internal"]
    : CAPTURE_TYPES

  return items
    .filter(
      (item): item is { name: string; type: string } =>
        item.type != null &&
        types.includes(item.type as (typeof CAPTURE_TYPES)[number]) &&
        !item.name.startsWith("chart-")
    )
    .map((item) => ({ name: item.name, type: item.type }))
}

const SCREENSHOT_WAIT_MS = 10_000
const IMAGE_LOAD_TIMEOUT_MS = 15_000

/** Scroll page to trigger lazy-loaded images, then wait for all images to load. */
async function ensureImagesLoaded(page: Page) {
  // Use string form so bundler doesn't inject __name etc. into browser context
  await page.evaluate(`
    (function() {
      var doc = document.documentElement;
      var scrollHeight = Math.max(doc.scrollHeight, doc.clientHeight);
      window.scrollTo(0, scrollHeight);
    })();
  `)
  await new Promise((r) => setTimeout(r, 500))
  await page.evaluate(`
    (function() {
      window.scrollTo(0, 0);
    })();
  `)
  await new Promise((r) => setTimeout(r, 300))

  // Wait for HTML img and SVG image elements (e.g. Safari component uses <image href="...">) - string form to avoid __name in browser
  await page.evaluate(
    `(function(timeoutMs) {
      return new Promise(function(resolve) {
        var imgs = Array.from(document.querySelectorAll("img"));
        var svgImages = Array.from(document.querySelectorAll("svg image"));
        if (imgs.length === 0 && svgImages.length === 0) { resolve(); return; }
        var deadline = Date.now() + timeoutMs;
        var svgDone = 0;
        function onSvgDone() {
          svgDone++;
          check();
        }
        function check() {
          var imgPending = imgs.filter(function(img) { return !img.complete || img.naturalWidth === 0; });
          var allImgDone = imgPending.length === 0;
          var allSvgDone = svgDone >= svgImages.length;
          if ((allImgDone && allSvgDone) || Date.now() > deadline) { resolve(); return; }
          setTimeout(check, 100);
        }
        for (var i = 0; i < imgs.length; i++) {
          var img = imgs[i];
          if (img.complete && img.naturalWidth > 0) continue;
          img.addEventListener("load", check);
          img.addEventListener("error", check);
        }
        for (var j = 0; j < svgImages.length; j++) {
          var el = svgImages[j];
          el.addEventListener("load", onSvgDone);
          el.addEventListener("error", onSvgDone);
        }
        check();
      });
    })`,
    IMAGE_LOAD_TIMEOUT_MS
  )
}

/** Hide Next.js dev indicator and Tailwind indicator before screenshot. */
function hideDevIndicators(page: Page) {
  return page.evaluate(() => {
    const tailwind = document.querySelector("[data-tailwind-indicator]")
    if (tailwind) tailwind.remove()

    // Next.js dev indicator (portal and on-screen "N" / route indicator)
    const nextjsPortal = document.querySelector("nextjs-portal")
    if (nextjsPortal) (nextjsPortal as HTMLElement).style.setProperty("display", "none")

    const nextjsDialog = document.querySelector("[data-nextjs-dialog]")
    if (nextjsDialog) (nextjsDialog as HTMLElement).style.setProperty("display", "none")

    // Dev indicator is often a fixed anchor at bottom-left
    const anchors = document.querySelectorAll('a[href^="#"]')
    for (const el of anchors) {
      const style = getComputedStyle(el)
      if (style.position === "fixed" && (el as HTMLElement).offsetWidth < 80) {
        (el as HTMLElement).style.setProperty("visibility", "hidden")
      }
    }
  })
}

// ----------------------------------------------------------------------------
// Capture screenshots.
// ----------------------------------------------------------------------------
async function captureScreenshots(options?: { blocksOnly?: boolean }) {
  const allItems = getViewableItems(options)
  const itemsToCapture = allItems.filter((item) => {
    const folder = getScreenshotFolder(item.type)
    const dir = path.join(SCREENSHOTS_BASE, folder, item.name)
    const lightPath = path.join(dir, "light.png")
    const darkPath = path.join(dir, "dark.png")
    return !existsSync(lightPath) || !existsSync(darkPath)
  })

  if (itemsToCapture.length === 0) {
    console.log("✨ All screenshots exist, nothing to capture")
    return
  }

  console.log(
    `📷 Capturing ${itemsToCapture.length} items (${options?.blocksOnly ? "blocks only" : "blocks + examples"})...`
  )

  const browser = await puppeteer.launch({
    defaultViewport: {
      width: 1440,
      height: 900,
      deviceScaleFactor: 2,
    },
  })

  for (const item of itemsToCapture) {
    const { name: itemId, type } = item
    const folder = getScreenshotFolder(type)
    const pageUrl = `http://localhost:3000/view/${itemId}`

    const page = await browser.newPage()
    await page.goto(pageUrl, {
      waitUntil: "networkidle2",
    })

    console.log(`- Capturing ${itemId} (${folder})...`)

    for (const theme of ["light", "dark"]) {
      const screenshotPath = path.join(
        SCREENSHOTS_BASE,
        folder,
        itemId,
        `${theme}.png`
      )

      if (existsSync(screenshotPath)) {
        continue
      }

      await mkdir(path.dirname(screenshotPath), { recursive: true })

      // Set theme and reload page
      await page.evaluate((currentTheme) => {
        localStorage.setItem("theme", currentTheme)
      }, theme)

      await page.reload({ waitUntil: "networkidle2" })

      // Wait at least 10 seconds before capturing (animations, fonts, etc.)
      console.log(`  Waiting ${SCREENSHOT_WAIT_MS / 1000}s before ${theme} screenshot...`)
      await new Promise((resolve) => setTimeout(resolve, SCREENSHOT_WAIT_MS))

      // Trigger lazy-loaded images and wait for all images to load
      console.log(`  Ensuring images are loaded...`)
      await ensureImagesLoaded(page)

      await hideDevIndicators(page)

      await page.screenshot({
        path: screenshotPath,
      })
    }

    await page.close()
  }

  await browser.close()
}

try {
  const blocksOnly = process.env.CAPTURE_BLOCKS_ONLY === "1"
  console.log("🔍 Capturing screenshots...")

  await captureScreenshots({ blocksOnly })

  console.log("✅ Done!")
} catch (error) {
  console.error(error)
  process.exit(1)
}
