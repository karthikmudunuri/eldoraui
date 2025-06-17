"use client";
import FancyTestimonialsSlider from "@/registry/eldoraui/testimonalslider";

export default function TestimonalSliderDemo() {
  const testimonials = [
    {
      img: "https://randomuser.me/api/portraits/men/91.jpg",
      quote: "EldoraUI's components make building UIs effortless great work!",
      name: "Jessie J",
      role: "Acme LTD",
    },
    {
      img: "https://randomuser.me/api/portraits/women/12.jpg",
      quote:
        "EldoraUI simplifies complex designs with ready-to-use components.",
      name: "Nick V",
      role: "Malika Inc.",
    },
    {
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      quote: "With EldoraUI, creating responsive UIs is a breeze.",
      name: "Amelia W",
      role: "Panda AI",
    },
  ];
  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-lg border bg-background">
      <div className="mt-[64px] flex justify-center px-12">
        <FancyTestimonialsSlider testimonials={testimonials} />
      </div>
    </div>
  );
}
