import { Safari } from "@/registry/eldoraui/safari-browser"

export function SafariBrowserDemo() {
  return (
    <div className="relative">
      <Safari
        url="eldoraui.site"
        src="https://res.cloudinary.com/eldoraui/image/upload/v1758570676/mac_llxzg3.jpg"
        className="size-full"
      />
    </div>
  )
}
