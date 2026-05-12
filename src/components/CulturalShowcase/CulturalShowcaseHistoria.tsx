import Image from "next/image";
import CulturalShowcaseOne from "../../assets/CulturalShowcaseOne.png";
import Card from "../Card/Card";
import { cardInfo } from "../Card/cardInfo";
import CardMobile from "../Card/CardMobile";

export default function CulturalShowcaseHistoria() {
  return (
    <div className="container-section grid grid-cols-1 gap-6">
      <Image
        className="w-full rounded"
        src={CulturalShowcaseOne}
        alt="banner cultural showcase"
        height={148}
      />
      <div className="block md:hidden">
        <div className="flex flex-col items-center gap-5 lg:hidden">
          {cardInfo.history.map((card, index) => (
            <CardMobile
              key={index}
              image={card.image}
              title={card.title}
              badges={card.badges}
            />
          ))}
        </div>
      </div>

      <div className="hidden gap-6 md:flex md:items-center md:justify-around">
        {cardInfo.history.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            badges={card.badges}
          />
        ))}
      </div>
    </div>
  );
}
