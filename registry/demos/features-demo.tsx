import Features from "@/registry/eldoraui/features";
import Section from "@/registry/ui/section";
import { PackageSearch, Settings, Eye } from "lucide-react";

const data = [
  {
    id: 1,
    title: "1. Choose Your Component",
    content:
      "Select the component that best suits your needs from Eldora UI's versatile collection, designed to simplify and enhance your development process.",
    image:
      "https://res.cloudinary.com/eldoraui/image/upload/v1734107781/Screenshot_2024-12-13_at_10.06.08_PM_molet1.png",
    icon: <PackageSearch className="size-6 text-primary" />,
  },
  {
    id: 2,
    title: "2. Add Utility Helpers",
    content:
      "Enhance functionality by incorporating utility helpers that align with the selected component, ensuring seamless integration and customization.",
    image:
      "https://res.cloudinary.com/eldoraui/image/upload/v1734107781/Screenshot_2024-12-13_at_10.06.08_PM_molet1.png",
    icon: <Settings className="size-6 text-primary" />,
  },
  {
    id: 3,
    title: "3. Copy and Paste the Code",
    content:
      "Simply copy and paste the provided code into your project, making the process quick and hassle-free. You're now ready to see the magic in action!",
    image:
      "https://res.cloudinary.com/eldoraui/image/upload/v1734107781/Screenshot_2024-12-13_at_10.06.08_PM_molet1.png",
    icon: <Eye className="size-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section
      title="Get Started Effortlessly"
      subtitle="Three simple steps to bring your ideas to life"
    >
      <Features data={data} />
    </Section>
  );
}
