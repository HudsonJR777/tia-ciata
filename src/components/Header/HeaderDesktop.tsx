import Image from "next/image";
import Link from "next/link";
import logoHeader from "../../assets/logoHeader.svg";
import { navItems, ROUTES } from "../../constants/routes";
import ChapterAccordion from "../BannerHero/ChapterAccordeon";

export default function HeaderDesktop() {
  return (
    <header className="container-section sticky top-0 z-50 py-10 hidden lg:block bg-[#070707] text-white border-b border-white/10">
      <div className="container mx-auto flex max-h-16 items-center justify-between gap-6 px-4 lg:px-0">
        <Link href={ROUTES.HOME} className="flex items-center gap-3">
          <Image
            src={logoHeader}
            alt="logo do menu header"
            width={200}
            height={80}
            priority
          />
        </Link>

        <nav>
          <ul className="flex items-center gap-8 text-[18px] font-medium uppercase text-white/80 pr-71.5">
            {navItems.map((item, index) =>
              item.title === "Capítulos" ? (
                <li key={index} className="relative">
                  <ChapterAccordion />
                </li>
              ) : (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="transition hover:text-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
