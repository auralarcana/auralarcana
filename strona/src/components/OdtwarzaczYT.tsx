"use client";

import { useState } from "react";

// Fasada odtwarzacza: miniatura ładuje się natychmiast, iframe YouTube dopiero
// po kliknięciu (youtube-nocookie, autoplay). Zero autoodtwarzania przy wejściu.
export default function OdtwarzaczYT(props: {
  youtubeId: string;
  title: string;
  duration?: string;
}) {
  const [gra, setGra] = useState(false);

  if (gra) {
    return (
      <div className="relative aspect-video w-full overflow-hidden border border-linia bg-black">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${props.youtubeId}?autoplay=1&rel=0`}
          title={props.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setGra(true)}
      className="group relative block aspect-video w-full overflow-hidden border border-linia bg-noc-2 text-left"
      aria-label={`Play: ${props.title}`}
    >
      {/* Miniatura z YouTube, ładowana leniwie */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${props.youtubeId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-zloto bg-noc/70 backdrop-blur-sm transition-transform group-hover:scale-110">
          <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-zloto-2" aria-hidden="true">
            <path d="M8 5.5v13l11-6.5z" />
          </svg>
        </span>
      </span>
      {props.duration && (
        <span className="absolute bottom-2 right-2 bg-noc/80 px-2 py-0.5 text-xs tracking-wider text-kosc">
          {props.duration}
        </span>
      )}
    </button>
  );
}
