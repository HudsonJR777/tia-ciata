import Image from "next/image";
import logoHeader from "../../assets/logoHeader.svg";
import { headerInfos } from "./headerInfos";
import ChapterAccordion from "../BannerHero/ChapterAccordeon";

export default function HeaderDesktop() {
  return (
    <header className="container-section sticky top-0 z-50 py-10 hidden lg:block bg-[#070707] text-white border-b border-white/10">
      <div className="container mx-auto flex max-h-16 items-center justify-between gap-6 px-4 lg:px-0">
        <a href="#" className="flex items-center gap-3">
          <Image
            src={logoHeader}
            alt="logo do menu header"
            width={200}
            height={80}
          />
        </a>

        <nav>
          <ul className="flex items-center gap-8 text-sm font-medium uppercase text-white/80 pr-71.5">
            {headerInfos.map((item, index) =>
              item.title === "Capítulos" ? (
                <li key={index} className="relative">
                  <ChapterAccordion />
                </li>
              ) : (
                <li key={index}>
                  <a
                    href={`#${item.title.toLowerCase()}`}
                    className="transition hover:text-white"
                  >
                    {item.title}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
