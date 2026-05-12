import Image from "next/image";
import bannerHero from "../../assets/bannerHero.png";

export default function BannerHero() {
  return (
    <section>
      <Image
        src={bannerHero}
        alt="Banner Matriarca do Samba"
        className="h-full w-full object-cover"
      />
    </section>
  );
}
