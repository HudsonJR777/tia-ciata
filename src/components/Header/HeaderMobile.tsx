"use client";

import Image from "next/image";
import { useState } from "react";
import logoHeader from "../../assets/logoHeader.svg";
import { headerInfos } from "./headerInfos";
import ChapterAccordion from "../BannerHero/ChapterAccordeon";

export default function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="lg:hidden sticky top-0 z-50 bg-[#070707] text-white border-b border-white/10">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2">
          <Image
            src={logoHeader}
            alt="logo do menu header"
            width={120}
            height={100}
            priority
            className="h-10 w-10"
          />
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 p-2"
          aria-label="Menu"
          aria-expanded={isOpen}
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-white/10 bg-black/95">
          <ul className="flex flex-col gap-0 text-sm font-medium uppercase text-white/80">
            {headerInfos.map((item, index) =>
              item.title === "Capítulos" ? (
                <li
                  key={index}
                  className="border-b border-white/5 last:border-b-0"
                >
                  <div className="block px-4 py-3">
                    <ChapterAccordion mobile />
                  </div>
                </li>
              ) : (
                <li
                  key={index}
                  className="border-b border-white/5 last:border-b-0"
                >
                  <a
                    href={`#${item.title.toLowerCase()}`}
                    className="block px-4 py-3 transition hover:bg-white/10 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
