import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import MeetTheTeamCard from "./MeetTheTeamCard";
import { MeetTheTeamCardInfos } from "./MeetTheTeamCardInfos";

const responsive = {
  0: { items: 1 },
  640: { items: 1 },
  768: { items: 2 },
  1024: { items: 3 },
  1280: { items: 4 },
};

export default function MeetTheTeam() {
  const items = MeetTheTeamCardInfos.map((team, index) => (
    <div key={`${team.name}-${index}`} className="px-2">
      <MeetTheTeamCard
        image={team.image}
        name={team.name}
        functition={team.function}
      />
    </div>
  ));

  return (
    <section className="container-section py-10">
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="responsive"
        disableDotsControls={false}
        disableButtonsControls={false}
        infinite
        keyboardNavigation
        paddingLeft={16}
        paddingRight={16}
      />
    </section>
  );
}
