import type { Metadata } from "next";
import Image from "next/image";
import viesAlgoritmico from "@/src/assets/viesAlgoritmico.png";
import bannerSobre from "@/src/assets/bannerSobre.png";
import extrasTitle from "@/src/assets/extras.png";
import { siteName, siteDescription, siteUrl } from "@/src/constants/seo";

export const metadata: Metadata = {
  title: `${siteName} — Extras`,
  description: siteDescription,
  openGraph: {
    title: `${siteName} — Extras`,
    description: siteDescription,
    url: `${siteUrl}/extras`,
    siteName,
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/extras`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Extras() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <main>
        {/* Banner Hero - Extras com imagem de fundo */}
        <section className="relative w-full overflow-hidden min-h-[260px] lg:min-h-[340px] flex items-end">
          {/* Imagem de fundo */}
          <Image
            src={bannerSobre}
            alt="Banner Extras"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-transparent" />

          {/* Título como imagem + subtítulo */}
          <div className="container-section relative z-10 pb-10 pt-20 lg:pb-16 lg:pt-28">
            <h1 className="sr-only">Extras do projeto Tia Ciata</h1>
            <Image
              src={extrasTitle}
              alt="Extras"
              className="w-[280px] lg:w-[460px] object-contain"
              priority
            />
            <p className="text-white text-xs lg:text-sm uppercase tracking-[0.3em] font-semibold mt-3">
              Outros conteúdos úteis
            </p>
          </div>
        </section>

        {/* Seção do Vídeo */}
        <section className="container-section py-12 lg:py-16">
          {/* Título da seção */}
          <div className="flex items-center gap-3 mb-10">
            <span className="text-white text-lg">✳</span>
            <h2 className="text-white text-xs lg:text-sm font-bold uppercase tracking-[0.22em]">
              Do Passado ao Futuro: Representatividade e Tecnologia
            </h2>
          </div>

          {/* Layout: imagem à esquerda, texto à direita */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start mb-10">
            <Image
              src={viesAlgoritmico}
              alt="O que é viés algorítmico"
              className="w-full rounded-xl object-cover shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
              priority
            />

            <div className="flex flex-col gap-5">
              <p className="text-white/80 text-sm lg:text-base leading-relaxed">
                O legado de <strong className="text-white">Tia Ciata</strong>{" "}
                nos lembra da importância da representatividade e do
                reconhecimento de grupos historicamente marginalizados. Hoje,
                esses debates também estão presentes na tecnologia.{" "}
                <strong className="text-white">
                  O vídeo a seguir aborda o tema do viés algorítmico e mostra
                  como sistemas de Inteligência Artificial podem reproduzir
                  desigualdades quando não são desenvolvidos de forma ética e
                  inclusiva.
                </strong>{" "}
                Refletir sobre esses desafios é uma forma de conectar passado,
                presente e futuro na construção de uma sociedade mais justa.
              </p>
            </div>
          </div>

          {/* Player de vídeo */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
            <iframe
              src="https://drive.google.com/file/d/177vLNXw-rdUF-B6-bkXmEdK-dq26mRUj/preview"
              className="w-full h-full"
              allow="autoplay"
              allowFullScreen
            />
          </div>

          {/* Crédito do vídeo */}
          <div className="flex items-center justify-between mt-3 px-1">
            <p className="text-white/40 text-xs">Vídeo Viés Algorítmico</p>
            <p className="text-white/25 text-xs">Kátia Leal</p>
          </div>
        </section>
      </main>
    </div>
  );
}
