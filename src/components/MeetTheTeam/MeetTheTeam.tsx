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
  0: { items: 1 },
  640: { items: 1 },
  768: { items: 2 },
  1024: { items: 3 },
  1280: { items: 4 },
};

export default function MeetTheTeam() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const items = MeetTheTeamCardInfos.map((team, index) => (
    <div
      key={`${team.name}-${index}`}
      className="w-full flex justify-center items-center px-2"
    >
      {/* Mobile: Card menor (210px) */}
      <div className="block md:hidden">
        <MeetTheTeamCardMobile image={team.image} name={team.name} />
      </div>

      {/* Desktop: Card maior (310px) */}
      <div className="hidden lg:block">
        <MeetTheTeamCard image={team.image} name={team.name} />
      </div>
    </div>
  ));

  if (!mounted) return null;

  return (
    <section className="w-full lg:w-[1600px] mx-auto py-10 px-4 overflow-hidden container-section flex flex-col items-center gap-10">
      <h1 className="text-3xl lg:text-5xl font-black leading-tight mb-4 text-center">
        Créditos da Equipe
      </h1>
      <AliceCarousel
        autoPlay={true}
        mouseTracking={false}
        touchTracking={true}
        items={items}
        responsive={responsive}
        disableDotsControls={false}
        disableButtonsControls={true}
        infinite={true}
        autoWidth={false}
        keyboardNavigation
      />
    </section>
  );
}
