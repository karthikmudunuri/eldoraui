// "use client";
// import Link from "next/link";
// import { ChevronRight } from "lucide-react";
// import posthog from "posthog-js";
// import { AnimatedShinyText } from "@/registry/eldoraui/animatedshinytext";
// import { WordPullUp } from "./wordpullup";

// export default function SidebarCTA() {
//   return (
//     <Link
//       href=""
//       target="_blank"
//       onClick={() => posthog.capture("sidebar_cta_clicked")}
//       className="group my-20 flex w-full flex-col items-center justify-center gap-2 rounded-xl bg-[#d946ef] p-4 text-center text-lg font-medium leading-tight text-white"
//     >
//        <WordPullUp words="Coming Soon" className="text-4xl" />
//       <AnimatedShinyText className="group inline-flex items-center justify-center whitespace-pre via-white/80 text-white dark:text-white">
//         ✨ New Saas Template
//         <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
//       </AnimatedShinyText>

//       <video
//         autoPlay
//         loop
//         playsInline
//         muted
//         src="/saas.mp4"
//         className="w-full overflow-hidden rounded-xl shadow-2xl"
//       />
//     </Link>
//   );
// }
