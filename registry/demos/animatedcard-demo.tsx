"use client";

import { MainMenusGradientCard } from "@/registry/eldoraui/animatedcard";

export default function AnimatedCardDemo() {
  return (
    <div className="relative grid w-5/6 grid-cols-1 gap-2 p-2 md:grid-cols-2">
      <MainMenusGradientCard
        className="p-4"
        description="This is the best library for creating dynamic cards"
        title="EldoraUI"
      >
        You can also add content inside the card
      </MainMenusGradientCard>
      <MainMenusGradientCard
        className="p-4"
        description="How fast is it now to create cards"
        title="Is Just crazy"
      >
        If leave the card empty, it will still look good
      </MainMenusGradientCard>
      <MainMenusGradientCard
        description="I just have to copy paste the code and it instantly works"
        title="Amazing"
      />
      <MainMenusGradientCard
        description="I can't believe how easy it is to use"
        title="Unbelievable"
      />
    </div>
  );
}
