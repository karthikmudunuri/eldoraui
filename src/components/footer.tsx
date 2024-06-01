import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/magicbutton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className=" w-full ml-10 -mt-10  dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative ">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0  dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
     

      <div className="flex flex-col items-center ">
        <h1 className="heading lg:max-w-[45vw] ">
          Ready to take <span className="text-purple-500">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:karthikmudunuri999@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center py-8">
        <p className="md:text-base text-sm md:font-normal font-light  ml-12">
          Copyright © 2024 Eldora UI
        </p>

        <div className="flex items-center md:gap-3 gap-6">
  {socialMedia.map((info) => (
    <a key={info.id} href={info.url} target="_blank" rel="noopener noreferrer">
      <div
        className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
      >
        <img src={info.img} alt="icons" width={20} height={20} />
      </div>
    </a>
  ))}
</div>

      </div>
     
    </div>
    </footer>
  );
};

export default Footer;
