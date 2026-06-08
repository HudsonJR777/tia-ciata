"use client";

import { useEffect, useState } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import MeetTheTeamCard from "./MeetTheTeamCard";
import MeetTheTeamCardMobile from "./MeetTheTeamCardMobile";
import { MeetTheTeamCardInfos } from "./MeetTheTeamCardInfos";
import dynamic from "next/dynamic";

const AliceCarousel = dynamic(() => import("react-alice-carousel"), {
  ssr: false,
});

const responsive = {
  0: { items: 1 }, // Mobile: 1 card por vez
  640: { items: 1 }, // Mobile grande: 1 card por vez
  768: { items: 2 }, // Tablet: 2 cards
  1024: { items: 3 }, // Telas médias: 3 cards
  1280: { items: 4 }, // Desktop: 4 cards
};

export default function MeetTheTeam() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const items = MeetTheTeamCardInfos.map((team, index) => (
    <div
      key={`${team.name}-${index}`}
      className="px-2 flex justify-center items-center"
    >
      {/* Mobile: Card menor (210px) */}
      <div className="block md:hidden">
        <MeetTheTeamCardMobile
          image={team.image}
          name={team.name}
          functition={team.function}
        />
      </div>

      {/* Desktop: Card maior (310px) */}
      <div className="hidden md:block">
        <MeetTheTeamCard
          image={team.image}
          name={team.name}
          functition={team.function}
        />
      </div>
    </div>
  ));

  if (!mounted) return null;

  return (
    <section className="w-full max-w-[1392px] mx-auto py-10 px-4 overflow-hidden container-section">
      <AliceCarousel
        mouseTracking={false}
        touchTracking={true}
        items={items}
        responsive={responsive}
        disableDotsControls={false}
        disableButtonsControls={true}
        infinite={false}
        autoWidth={true}
        keyboardNavigation
      />
    </section>
  );
}
