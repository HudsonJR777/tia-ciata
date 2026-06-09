import Image from "next/image";
import type { StaticImageData } from "next/image";

const socialLinks = [
  {
    label: "X",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 20 20"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M4.5 4.5L15.5 15.5" />
        <path d="M15.5 4.5L4.5 15.5" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M5.5 7.75C5.5 6.231 6.731 5 8.25 5s2.75 1.231 2.75 2.75S10.769 10.5 9.25 10.5 5.5 9.269 5.5 7.75Zm.25 12.5h3.5V11.75h-3.5v8.5Zm7.75-8.25c0-1.897 1.388-2.75 3.215-2.75 1.885 0 2.99.993 2.99 2.75v.125h-2.45v-.13c0-.494-.177-.987-.92-.987-.92 0-1.06.713-1.06.987v.13h-2.45V12h2.45v3.5h-2.45v4.75h-3.5v-8.5h3.5v1.1Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M7.683 2h8.634C19.56 2 22 4.439 22 7.683v8.634C22 19.56 19.56 22 16.317 22H7.683C4.44 22 2 19.56 2 16.317V7.683C2 4.44 4.44 2 7.683 2Zm5.317 5.125a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Zm6.005-.69a1.16 1.16 0 1 1-2.32 0 1.16 1.16 0 0 1 2.32 0Z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.49.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.528 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.337-2.222-.253-4.556-1.111-4.556-4.944 0-1.092.39-1.987 1.029-2.685-.103-.253-.446-1.27.098-2.645 0 0 .84-.269 2.75 1.026A9.56 9.56 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.908-1.295 2.747-1.026 2.747-1.026.546 1.375.203 2.392.1 2.645.64.698 1.028 1.593 1.028 2.685 0 3.842-2.337 4.688-4.565 4.936.36.31.68.92.68 1.854 0 1.336-.012 2.414-.012 2.743 0 .268.18.58.688.482A10.01 10.01 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
      </svg>
    ),
  },
];

interface IMeetTheTeamCardProps {
  image: StaticImageData | string;
  name: string;
  functition?: string;
}

export default function MeetTheTeamCard({
  image,
  name,
  functition,
}: IMeetTheTeamCardProps) {
  return (
    <article
      className="
        overflow-hidden
        rounded-[40px] 
        bg-[#F3EFF2]
        shadow-lg
        w-[310px] 
        h-[375px]
        flex
        flex-col
        justify-between
      "
    >
      <div className="flex flex-col items-center px-6 pt-6 pb-4 flex-1 justify-between">
        <div className="relative h-[180px] w-[180px] overflow-hidden rounded-[28px] border-[10px] border-white bg-[#E5E5E5]">
          <Image
            src={image}
            alt={name}
            fill
            priority
            sizes="180px"
            className="object-cover"
          />
        </div>

        <div className="mt-4 text-center w-full px-2">
          <h2 className="text-[28px] font-bold uppercase leading-tight text-[#292929] truncate">
            {name}
          </h2>

          <p className="mt-1 text-[18px] font-medium text-[#777777] truncate">
            {functition}
          </p>
        </div>

        <div className="mt-4 flex justify-center gap-3">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-[#232323]
                text-white
                transition-all
                duration-300
                hover:scale-110
              "
            >
              {item.icon}
            </a>
          ))}
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
