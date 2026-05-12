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

export default function Card({
  image,
  title,
  badges,
  href = "/#",
}: ICardProps) {
  return (
    <Link
      href={href}
      className="rounded overflow-hidden w-full h-full max-w-full"
    >
      <div className="relative overflow-hidden rounded-t-lg w-full h-[440px]">
        <Image
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-105"
          src={image}
          alt={title}
          width={623}
          height={324}
        />
      </div>

      <div className="grid grid-cols-1 gap-3 px-4 py-4">
        <div className="flex items-center gap-3">
          <Image
            className="rounded"
            src={cardIcone}
            alt="ícone do card"
            width={16}
            height={17}
          />
          <p className="uppercase text-2xlxl text-[#E8E8E8]">{title}</p>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {badges.map((badge, index) => (
            <div key={index} className="bg-[#E8E8E8] rounded">
              <div className="py-0.5 px-1">
                <p className="text-[#000000] text-[16px]">{badge.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
