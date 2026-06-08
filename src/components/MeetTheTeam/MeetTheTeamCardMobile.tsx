import Image from "next/image";
import type { StaticImageData } from "next/image";

interface IMeetTheTeamCardMobileProps {
  image: StaticImageData | string;
  name: string;
  functition: string;
}

export default function MeetTheTeamCardMobile({
  image,
  name,
  functition,
}: IMeetTheTeamCardMobileProps) {
  return (
    <article
      className="
        overflow-hidden
        rounded-[20px] 
        bg-[#F3EFF2]
        shadow-lg
        w-full
        max-w-[210px] 
        h-[275px]
        flex
        flex-col
        justify-between
      "
    >
      <div className="flex flex-col items-center px-6 pt-6 pb-4 flex-1 justify-between">
        <div className="relative h-[130px] w-[130px] overflow-hidden rounded-[28px] border-[10px] border-white bg-[#E5E5E5]">
          <Image
            src={image}
            alt={name}
            fill
            priority
            sizes="120px"
            className="object-cover"
          />
        </div>

        <div className="mt-4 text-center w-full px-2">
          <h2 className="text-[24px] font-bold uppercase leading-tight text-[#292929] truncate">
            {name}
          </h2>

          <p className="mt-1 text-[18px] font-medium text-[#777777] truncate">
            {functition}
          </p>
        </div>
      </div>

      <div className="flex h-5 w-full overflow-hidden">
        <div className="flex-1 bg-[#E6D8CC]" />
        <div className="flex-1 bg-[#FF4438]" />
        <div className="flex-1 bg-[#6CC04A]" />
        <div className="flex-1 bg-[#FECA0F]" />
      </div>
    </article>
  );
}
