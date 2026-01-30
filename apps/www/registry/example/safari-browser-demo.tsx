import { Safari } from "@/registry/eldoraui/safari-browser"

export function SafariBrowserDemo() {
  return (
    <div className="relative">
      <Safari
        url="eldoraui.site"
        src="https://avatar.vercel.sh/karthik"
        className="size-full"
      />
    </div>
  )
}
