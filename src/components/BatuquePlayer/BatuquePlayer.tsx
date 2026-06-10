"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Batuque } from "@/src/constants/batuques";

interface BatuquePlayerProps {
  batuques: Batuque[];
}

function PlayIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" />
    </svg>
  );
}

export default function BatuquePlayer({ batuques }: BatuquePlayerProps) {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const stopCurrent = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setPlayingId(null);
  }, []);

  const handleToggle = useCallback(
    (batuque: Batuque) => {
      if (playingId === batuque.id) {
        stopCurrent();
        return;
      }

      const previous = audioRef.current;
      if (previous) {
        previous.pause();
        previous.currentTime = 0;
      }

      const audio = new Audio(batuque.audioSrc);
      audio.loop = true;
      audioRef.current = audio;

      audio
        .play()
        .then(() => setPlayingId(batuque.id))
        .catch(() => setPlayingId(null));
    },
    [playingId, stopCurrent],
  );

  useEffect(() => {
    return () => {
      const audio = audioRef.current;
      if (audio) {
        audio.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <section
      className="my-10 rounded-3xl border border-white/10 bg-white/5 p-6 lg:p-8"
      aria-label="Toques de batuque"
    >
      <ul className="flex flex-col gap-6">
        {batuques.map((batuque) => {
          const isPlaying = playingId === batuque.id;

          return (
            <li
              key={batuque.id}
              className="flex flex-col gap-4 border-b border-white/10 pb-6 last:border-b-0 last:pb-0 sm:flex-row sm:items-center sm:gap-6"
            >
              <button
                type="button"
                onClick={() => handleToggle(batuque)}
                aria-pressed={isPlaying}
                aria-label={
                  isPlaying
                    ? `Parar ${batuque.name}`
                    : `Reproduzir ${batuque.name}`
                }
                className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                  isPlaying
                    ? "bg-[#FEC40F] text-black shadow-[0_0_24px_rgba(254,196,15,0.35)]"
                    : "border border-[#FEC40F]/40 bg-transparent text-[#FEC40F] hover:border-[#FEC40F] hover:bg-[#FEC40F]/10"
                }`}
              >
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </button>

              <div className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <h3 className="text-base font-bold text-[#FEC40F] lg:text-lg">
                  {batuque.name}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm">
                  <a
                    href={batuque.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FEC40F] underline decoration-[#FEC40F]/40 underline-offset-4 transition hover:decoration-[#FEC40F]"
                  >
                    Vídeo original
                  </a>
                  <a
                    href={batuque.sambaReferenceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 underline decoration-white/30 underline-offset-4 transition hover:text-white hover:decoration-white/60"
                  >
                    {batuque.sambaExampleLabel}
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
