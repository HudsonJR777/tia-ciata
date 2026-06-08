"use client";

import HeaderDesktop from "@/src/components/Header/HeaderDesktop";
import HeaderMobile from "@/src/components/Header/HeaderMobile";
import BannerHero from "@/src/components/BannerHero/BannerHero";
import CulturalShowcaseLegado from "@/src/components/CulturalShowcase/CulturalShowcaseLegado";
import CulturalShowcaseHistoria from "@/src/components/CulturalShowcase/CulturalShowcaseHistoria";
import CulturalShowcaseIdentity from "@/src/components/CulturalShowcase/CulturalShowcaseIdentity";
import HistoricalContext from "@/src/components/HistoricalContext/HistoricalContext";
import Introduction from "@/src/components/Introduction/Introduction";
import MeetTheTeam from "@/src/components/MeetTheTeam/MeetTheTeam";

export default function Home() {
  return (
    <div className="dark:bg-black">
      <main>
        <BannerHero />
        <div className="py-7 lg:py-40 flex flex-col items-center justify-center">
          <div className="flex flex-col gap-24.5">
            <CulturalShowcaseHistoria />
            <CulturalShowcaseLegado />
            <CulturalShowcaseIdentity />
          </div>
          <div className="flex flex-col gap-24.5 py-[80px] lg:py-[247px]">
            <HistoricalContext />
          </div>
          <div className="py-7 lg:py-4">
            <Introduction />
          </div>
          <div className="py-7 lg:py-4">
            <MeetTheTeam />
          </div>
        </div>
      </main>
    </div>
  );
}
