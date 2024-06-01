import { BentoDemo } from "../ui/benhero";
import { SpotlightPreview } from "./hero";
import React from "react";
import Grid from "../ui/bentohero";
import Footer from "../footer";


export function Home(): JSX.Element {
  return (
    <main className="bg-black relative">
      <SpotlightPreview />
      <div className="flex ml-60 items-center justify-start max-w-4xl bg-black -mt-16">
      <BentoDemo/>
      
      </div>
      <div className="flex ml-60 items-center justify-start max-w-6xl bg-black -mt-16">
      <Grid/>
      
      
      </div>
      <div className="max-w-7xl w-full">
      <Footer/>
      </div>
    </main>
  );
}