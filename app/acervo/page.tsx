"use client";

import Image from "next/image";
import bannerAcervo from "@/src/assets/bannerAcervo.png";
import galeriaAcervo1 from "@/src/assets/galeriaAcervo1.png";
import galeriaAcervo2 from "@/src/assets/galeriaAcervo2.png";
import galeriaAcervo3 from "@/src/assets/galeriaAcervo3.png";
import galeriaAcervo4 from "@/src/assets/galeriaAcervo4.png";
import acervoFonte from "@/src/assets/acervoFonte.png";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="text-white text-lg">✳</span>
      <h2 className="text-white text-xs lg:text-sm font-bold uppercase tracking-[0.22em]">
        {children}
      </h2>
    </div>
  );
}

export default function AcervoPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <main>
        {/* Banner Hero */}
        <section className="relative w-full overflow-hidden min-h-[260px] lg:min-h-[340px] flex items-end">
          <Image
            src={bannerAcervo}
            alt="Banner Acervo"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-transparent" />

          <div className="container-section relative z-10 pb-10 pt-20 lg:pb-16 lg:pt-28">
            <Image
              src={acervoFonte}
              alt="Acervo"
              className="w-[280px] lg:w-[460px] object-contain"
              priority
            />
            <p className="text-white text-xs lg:text-sm uppercase tracking-[0.3em] font-semibold mt-3">
              Registros visuais, memórias e fragmentos históricos que{" "}
              <br className="hidden lg:block" />
              preservam a imagem e o legado de Tia Ciata.
            </p>
          </div>
        </section>

        {/* Galeria do Acervo — cada imagem aparece exatamente uma vez */}
        <section className="container-section py-12 lg:py-16">
          <SectionTitle>Galeria do Acervo</SectionTitle>

          {/*
            Layout inspirado no protótipo:
            - Linha 1: img1 (paisagem larga, 3fr) | img2 (retrato, 2fr)  — ambas altura natural
            - Linha 2: img3 (retrato longo, 1fr) | img4 (retrato longo, 1fr) — lado a lado
          */}
          <div className="flex flex-col gap-2">

            {/* Linha 1: img1 grande + img2 retrato — mesma altura */}
            <div className="grid grid-cols-[3fr_2fr] gap-2 h-[600px]">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={galeriaAcervo1}
                  alt="Galeria Acervo 1"
                  width={1824}
                  height={1292}
                  priority
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={galeriaAcervo2}
                  alt="Galeria Acervo 2"
                  width={896}
                  height={1292}
                  priority
                  className="w-full h-full object-cover object-[50%_10%]"
                />
              </div>
            </div>

            {/* Linha 2: img3 + img4 — retratos longos lado a lado */}
            <div className="grid grid-cols-2 gap-2 items-start">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={galeriaAcervo3}
                  alt="Galeria Acervo 3"
                  width={1824}
                  height={2476}
                  className="w-full h-auto"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={galeriaAcervo4}
                  alt="Galeria Acervo 4"
                  width={896}
                  height={2476}
                  className="w-full h-auto"
                />
              </div>
            </div>

          </div>
        </section>

        {/* Conteúdo Audiovisual */}
        <section className="container-section py-12 lg:py-16">
          <SectionTitle>Conteúdo Audiovisual</SectionTitle>

          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/2-5-_6w8EBQ"
              title="Vídeo do Acervo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="flex items-center justify-between mt-3 px-1 text-xs text-white/40">
            <span>Vídeo do acervo</span>
            <span>Tia Ciata / Projeto Cultural</span>
          </div>
        </section>

        {/* Onde fica a Casa Tia Ciata */}
        <section className="container-section py-12 lg:py-16">
          <SectionTitle>Onde fica a Casa Tia Ciata</SectionTitle>

          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
            <iframe
              title="Mapa da Casa Tia Ciata"
              className="h-[420px] w-full"
              src="https://www.google.com/maps?q=Rua+Camerino,+5,+Centro,+Rio+de+Janeiro,+RJ,+20080-011&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>
    </div>
  );
}