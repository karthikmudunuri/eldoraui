"use client";

import * as React from "react";

import { TweetGrid } from "@/registry/eldoraui/tweetgrid";
import { GradualSpacing } from "@/registry/eldoraui/gradualspacing";

// Grab tweet ids
const exampleTweets = [
  "1814496850134946210",
  "1860031241325584796",
  "1858816175121088962",
  "1858433973489430841",
  "1822728938507956633",
  "1815138485440803034",
  "1836064706185892062",
  "1823274177639440741",
];

export default function TweetGridDemo({}) {
  return (
    <div className="max-w-md pb-12 md:max-w-4xl">
      <div className="flex w-full justify-center pb-12">
        <GradualSpacing
          className="font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
          text="Explore Tweets"
        />
      </div>
      <div className="flex w-full items-center justify-center">
        <TweetGrid
          className="w-80 md:w-full "
          tweets={exampleTweets}
          columns={2}
          spacing="lg"
        />
      </div>
    </div>
  );
}
