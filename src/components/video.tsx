import { cn } from "../../lib/utils";
import {
  MediaPlayer,
  MediaOutlet,
  useMediaRemote,
  useMediaStore,
} from "@vidstack/react";
import { Play } from "lucide-react";
import { useState, useRef } from "react";

export const CloudflareVideo = ({
  videoId,
  aspectRatio,
  className,
  gifStyle = false,
  poster,
  posterStartTime = 1,
  title,
}: {
  videoId: string;
  aspectRatio?: number;
  gifStyle?: boolean;
  className?: string;
  poster?: string;
  posterStartTime?: number;
  title?: string;
}) => {
  return (
    <Video
      src={`https://customer-xnej9vqjtgxpafyk.cloudflarestream.com/${videoId}/manifest/video.m3u8`}
      poster={
        poster ??
        `https://customer-xnej9vqjtgxpafyk.cloudflarestream.com/${videoId}/thumbnails/thumbnail.gif?time=${posterStartTime}s`
      }
      aspectRatio={aspectRatio}
      gifStyle={gifStyle}
      className={className}
      title={title}
    />
  );
};

export const Video = ({
  src,
  poster,
  aspectRatio,
  className,
  gifStyle = false,
  title,
}: {
  src: string;
  poster?: string;
  aspectRatio?: number;
  gifStyle?: boolean;
  className?: string;
  title?: string;
}) => {
  const [panelDismissed, setPanelDismissed] = useState(false);
  const mediaPlayerRef = useRef(null);
  const remote = useMediaRemote(mediaPlayerRef);
  const { duration } = useMediaStore(mediaPlayerRef);
  const durationString = duration
    ? `${Math.floor(duration / 60)}:${Math.floor(duration % 60)} min`
    : null;

  return (
    <MediaPlayer
      ref={mediaPlayerRef}
      src={src}
      controls={!gifStyle && panelDismissed}
      autoplay={gifStyle}
      muted={gifStyle}
      loop={gifStyle}
      load={gifStyle ? "eager" : "custom"}
      playsinline={gifStyle}
      aspectRatio={aspectRatio}
      className={cn(
        "my-4 overflow-hidden rounded shadow-lg ring-1 ring-slate-700 bg-cover object-cover",
        className
      )}
    >
      {gifStyle ? (
        // Capture mouse events, they broke scrolling on iOS
        <div className="absolute inset-0 z-10" />
      ) : !panelDismissed ? (
        // Overlay with play button and poster image
        <div
          className="group cursor-pointer absolute inset-0 z-10 flex flex-col justify-center items-center bg-cover"
          style={{
            backgroundImage: poster ? `url(${poster})` : undefined,
          }}
          onMouseMove={() => {
            remote.startLoading();
          }}
          onClick={() => {
            remote.startLoading();
            remote.play();
            setPanelDismissed(true);
          }}
        >
          <div className="p-3 md:p-6 rounded-full bg-black/80 group-hover:bg-black/90 group-hover:ring-8 ring-black/20 transition flex">
            <Play className="h-6 w-6 text-white" />
          </div>
          <div className="mt-3 md:mt-6 transition-opacity duration-300">
            <span className="flex gap-2 text-xs md:text-sm font-semibold bg-black/80 group-hover:bg-black/90 transition-all text-white py-1 px-3 rounded-full">
              {title && <span>{title}</span>}
              {durationString && (
                <span className="text-white/70">{durationString}</span>
              )}
            </span>
          </div>
        </div>
      ) : null}
      <MediaOutlet />
    </MediaPlayer>
  );
};
