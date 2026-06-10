import bannerHero from "@/src/assets/bannerHero.png";

export const siteName = "Tia Ciata";
export const siteDescription =
  "Tia Ciata foi uma figura central na história do samba e da cultura brasileira. Um projeto cultural e educativo que resgata identidade, memória e legado afro-brasileiro.";
export const siteUrl = "https://tia-ciata.com";
export const metadataBase = new URL(siteUrl);
export const defaultOpenGraphImage = bannerHero;
export const defaultOpenGraph = {
  title: siteName,
  description: siteDescription,
  siteName,
  type: "website",
  images: [
    {
      url: `${siteUrl}${bannerHero.src}`,
      alt: siteName,
    },
  ],
};
