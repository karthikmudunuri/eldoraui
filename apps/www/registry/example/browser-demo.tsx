import { Browser } from "@/registry/eldoraui/browser"

export function BrowserDemo() {
  return (
    <div className="h-[500px]">
      <Browser initialUrl="https://www.eldoraui.site" loadingDuration={1500} />
    </div>
  )
}
