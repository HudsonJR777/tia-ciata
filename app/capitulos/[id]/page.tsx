import type { Metadata } from "next";
import { chapters } from "@/src/constants/chapters";
import { CommonBanner } from "@/src/components/Common";
import ChapterContent from "@/src/components/ChapterContent";
import { notFound } from "next/navigation";
import { siteName, siteDescription, siteUrl } from "@/src/constants/seo";

interface CapituloPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: CapituloPageProps): Promise<Metadata> {
  const { id } = await params;
  const chapter = chapters.find((c) => c.id === id);

  if (!chapter) {
    return {
      title: `${siteName} — Capítulo`,
      description: siteDescription,
    };
  }

  return {
    title: `${chapter.title} — ${siteName}`,
    description: chapter.description || siteDescription,
    openGraph: {
      title: chapter.title,
      description: chapter.description || siteDescription,
      url: `${siteUrl}/capitulos/${chapter.id}`,
      siteName,
      type: "article",
      images: [
        {
          url: `${siteUrl}${chapter.banner.src}`,
          alt: chapter.title,
        },
      ],
    },
    alternates: {
      canonical: `${siteUrl}/capitulos/${chapter.id}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateStaticParams() {
  return chapters.map((chapter) => ({ id: chapter.id }));
}

export default async function CapituloPage({ params }: CapituloPageProps) {
  const { id } = await params;
  const chapter = chapters.find((c) => c.id === id);

  if (!chapter) {
    notFound();
  }

  return (
    <div className="dark:bg-black">
      <main>
        {/* Banner Hero */}
        <CommonBanner src={chapter.banner} alt={chapter.title} />

        {/* Conteúdo do Capítulo */}
        <div className="container-section py-7 lg:py-20">
          <div className="flex flex-col gap-8 lg:gap-12">
            {/* Título do Capítulo */}
            <h1 className="chapter-title">{chapter.title}</h1>

            {/* Descrição */}
            <p className="chapter-description">{chapter.description}</p>

            {/* Conteúdo Principal */}
            <ChapterContent blocks={chapter.content} />
          </div>
        </div>
      </main>
    </div>
  );
}
