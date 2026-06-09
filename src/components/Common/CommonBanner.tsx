import Image from "next/image";
import { StaticImageData } from "next/image";

interface CommonBannerProps {
  src: StaticImageData;
  alt: string;
  priority?: boolean;
}

export default function CommonBanner({
  src,
  alt,
  priority = true,
}: CommonBannerProps) {
  return (
    <section>
      <Image
        src={src}
        alt={alt}
        priority={priority}
        className="h-full w-full object-cover"
      />
    </section>
  );
}
