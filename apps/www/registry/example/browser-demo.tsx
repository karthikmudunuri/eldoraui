import { Browser } from "@/registry/eldoraui/browser"

export function BrowserDemo() {
  return (
    <div className="h-full">
      <Browser initialUrl="https://www.eldoraui.site" loadingDuration={1500} />
    </div>
  )
}
