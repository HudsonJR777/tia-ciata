import type { StaticImageData } from "next/image";
import Image from "next/image";
import cardIcone from "../../assets/cardIcone.svg";
import Link from "next/link";

interface Badge {
  title: string;
}

interface ICardProps {
  image: StaticImageData | string;
  title: string;
  badges: Badge[];
  href?: string;
}

export default function CardMobile({
  image,
  title,
  badges,
  href = "/#",
}: ICardProps) {
  return (
    <Link
      href={href}
      className="group rounded grid grid-cols-1 gap-3 overflow-hidden w-full "
    >
      <div className="overflow-hidden rounded-lg w-full ">
        <Image
          className="rounded transition-transform duration-300 ease-out group-hover:scale-105"
          src={image}
          alt={title}
          width={400}
          height={300}
          sizes="(max-width: 640px) 100vw, 400px"
        />
      </div>

      <div className="grid grid-cols-1 gap-2 px-1">
        <div className="flex items-center gap-2">
          <Image
            className="rounded flex-shrink-0"
            src={cardIcone}
            alt="ícone do card"
            width={14}
            height={15}
          />
          <p className="uppercase text-[8px] font-semibold text-[#E8E8E8] leading-tight line-clamp-2">
            {title}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {badges.slice(0, 3).map((badge, index) => (
            <div key={index} className="bg-[#E8E8E8] rounded px-2 py-1">
              <p className="text-[#000000] text-[7px] font-medium leading-none">
                {badge.title}
              </p>
            </div>
          ))}
          {badges.length > 3 && (
            <div className="bg-[#E8E8E8] rounded px-2 py-1">
              <p className="text-[#000000] text-[10px] font-medium leading-none">
                +{badges.length - 3}
              </p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
