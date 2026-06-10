import type { Metadata } from "next";
import { CommonBanner } from "@/src/components/Common";
import bannerHero from "@/src/assets/bannerHero.png";
import CulturalShowcaseLegado from "@/src/components/CulturalShowcase/CulturalShowcaseLegado";
import CulturalShowcaseHistoria from "@/src/components/CulturalShowcase/CulturalShowcaseHistoria";
import CulturalShowcaseIdentity from "@/src/components/CulturalShowcase/CulturalShowcaseIdentity";
import MeetTheTeam from "@/src/components/MeetTheTeam/MeetTheTeam";
import { siteName, siteDescription, siteUrl } from "@/src/constants/seo";

export const metadata: Metadata = {
  title: `${siteName} — Legado do Samba`,
  description: siteDescription,
  openGraph: {
    title: `${siteName} — Legado do Samba`,
    description: siteDescription,
    url: `${siteUrl}/`,
    siteName,
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <div className="dark:bg-black">
      <main>
        <h1 className="sr-only">
          Tia Ciata — memorial e legado do samba afro-brasileiro
        </h1>
        <CommonBanner src={bannerHero} alt="Banner Matriarca do Samba" />
        <div className="py-7 lg:py-40 flex flex-col items-center justify-center">
          <div className="flex flex-col gap-24.5">
            <CulturalShowcaseHistoria />
            <CulturalShowcaseLegado />
            <CulturalShowcaseIdentity />
          </div>
          {/* <div className="flex flex-col gap-24.5 py-[80px] lg:py-[247px]">
            <HistoricalContext />
          </div>
          <div className="py-7 lg:py-4">
            <Introduction />
          </div> */}
          <div className="hidden lg:block py-7 lg:py-4">
            <MeetTheTeam />
          </div>
        </div>
      </main>
    </div>
  );
}
