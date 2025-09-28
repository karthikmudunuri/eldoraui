import { Browser } from "@/registry/eldoraui/browser"

export function BrowserDemo2() {
  return (
    <div className="mx-auto h-[620px]">
      <Browser
        initialUrl="https://www.eldoraui.site"
        showWindowControls={true}
        showBookmarksBar={true}
        showStatusBar={true}
        enableTabManagement={true}
        enableBookmarks={true}
        enableHistory={true}
        enableDownloads={true}
        enableSettings={true}
        maxTabs={8}
        simulateLoading={true}
        loadingDuration={1500}
      />
    </div>
  )
}
