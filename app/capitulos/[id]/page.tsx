import { chapters } from "@/src/constants/chapters";
import { CommonBanner } from "@/src/components/Common";
import ChapterContent from "@/src/components/ChapterContent";
import { notFound } from "next/navigation";

interface CapituloPageProps {
  params: Promise<{
    id: string;
  }>;
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
