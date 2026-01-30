import { Eye, PackageSearch, Settings } from "lucide-react"

import { Features } from "@/registry/blocks/features-01/components/features"
import Section from "@/registry/blocks/features-01/components/section"

const data = [
  {
    id: 1,
    title: "1. Choose Your Component",
    content:
      "Select the component that best suits your needs from Eldora UI's versatile collection, designed to simplify and enhance your development process.",
    image:
      "https://pub-b3533f2e1c954842824758490b95c9d5.r2.dev/block-preview-dark.png",
    icon: <PackageSearch className="text-primary size-6" />,
  },
  {
    id: 2,
    title: "2. Add Utility Helpers",
    content:
      "Enhance functionality by incorporating utility helpers that align with the selected component, ensuring seamless integration and customization.",
    image:
      "https://pub-b3533f2e1c954842824758490b95c9d5.r2.dev/block-preview-dark.png",
    icon: <Settings className="text-primary size-6" />,
  },
  {
    id: 3,
    title: "3. Copy and Paste the Code",
    content:
      "Simply copy and paste the provided code into your project, making the process quick and hassle-free. You're now ready to see the magic in action!",
    image:
      "https://pub-b3533f2e1c954842824758490b95c9d5.r2.dev/block-preview-dark.png",
    icon: <Eye className="text-primary size-6" />,
  },
]

export default function Testimonals02Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-full">
        <Section
          title="Get Started Effortlessly"
          subtitle="Three simple steps to bring your ideas to life"
        >
          <Features data={data} />
        </Section>
      </div>
    </div>
  )
}
