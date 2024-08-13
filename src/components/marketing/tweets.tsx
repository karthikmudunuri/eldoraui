import Marquee from "../marquee";
import TweetCard from "../tweet-client";

const tweets = [
  "https://x.com/Amu_gt/status/1822728938507956633",
  "https://x.com/ccbikai/status/1814496850134946210",
  "https://x.com/ThibaultJP1/status/1815138485440803034",
  "https://x.com/ccbikai/status/1816325000426607083",
  "https://x.com/delgorithm/status/1821170345472110788",
  "https://x.com/0xKaiBi/status/1817794180447621617",
  "https://x.com/akhdigital/status/1816926458863820880",
  "https://x.com/weeklyfoo/status/1816272881438892282",
  "https://x.com/prod42net/status/1815624153707229558",
  "https://x.com/NanimonoDaemon/status/1815015059552337956",
  "https://x.com/TheRealMxnny/status/1813592143430099175",
  "https://x.com/enolcasielles/status/1814550812326310270",
  
  
].map((t) => t.split("/").slice(-1)[0]);

export default async function Testimonials() {
  const firstRow = tweets.slice(0, tweets.length / 2);
  const secondRow = tweets.slice(tweets.length / 2);

  return (
    <section id="testimonials" className="container py-10">
      <h2 className="mb-4 text-center text-5xl font-bold leading-[1.2] tracking-tighter text-foreground">
        What People Are Saying
      </h2>
      <h3 className="mx-auto mb-8 max-w-lg text-balance text-center text-lg font-medium tracking-tight text-foreground/80">
        Don&apos;t just take our word for it. Here&apos;s what{" "}
        <span className="bg-gradient bg-clip-text text-transparent">real people</span> are saying about <span className="text-purple-600 from-fg-onAccent">Eldora UI</span> on Twitter.
      </h3>
      <div className="relative flex flex-col">
        <Marquee className="max-w-screen [--duration:120s]" pauseOnHover>
          {firstRow.map((id, idx) => (
            <TweetCard id={id} className="max-h-32 w-72 min-w-72" key={idx} />
          ))}
        </Marquee>
        <Marquee
          className="max-w-screen [--duration:120s]"
          reverse
          pauseOnHover
        >
          {secondRow.map((id, idx) => (
            <TweetCard id={id} className="max-h-32 w-72 min-w-72" key={idx} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 h-full  w-1/3 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  );
}