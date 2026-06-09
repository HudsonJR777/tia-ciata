"use client";

import { useState } from "react";
import Link from "next/link";

const chapters = [
  { title: "Capítulo 1", href: "/capitulos/1" },
  { title: "Capítulo 2", href: "/capitulos/2" },
  { title: "Capítulo 3", href: "/capitulos/3" },
  { title: "Capítulo 4", href: "/capitulos/4" },
  { title: "Capítulo 5", href: "/capitulos/5" },
];

interface ChapterAccordionProps {
  mobile?: boolean;
}

export default function ChapterAccordion({
  mobile = false,
}: ChapterAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={mobile ? "w-full" : "relative inline-block"}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between gap-2 text-left text-sm font-medium uppercase tracking-[0.08em] text-white/80 transition ${
          mobile
            ? "px-0 py-0"
            : "bg-transparent px-3 py-3 hover:text-white"
        }`}
        aria-expanded={open}
      >
        Capítulos

        <span
          className={`inline-block transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </button>

      {open && (
        <div
          className={`${
            mobile
              ? "mt-2 w-full bg-[#070707]"
              : "absolute right-0 z-50 mt-2 w-56 rounded-xl border border-white/10 bg-[#070707] shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
          }`}
        >
          <ul className="flex flex-col gap-1 p-2">
            {chapters.map((chapter, index) => (
              <li key={index}>
                <Link
                  href={chapter.href}
                  className="block rounded-lg px-3 py-2 text-sm text-[#F2C230] transition hover:bg-white/10 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {chapter.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}