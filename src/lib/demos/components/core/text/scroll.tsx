import { VelocityScroll } from "@/lib/components/core/default/scrollbasedtext";
import clsx from "clsx";

export default function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="Eldora UI"
      default_velocity={5}
      className={clsx("text-black drop-shadow-sm dark:text-white",
        "text-center font-display font-bold drop-shadow-sm",
        "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
        "tracking-[-0.02em]",
        "md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[5rem]"
      )}
    />
  );
}
