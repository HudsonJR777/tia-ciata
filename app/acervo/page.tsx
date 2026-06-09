import Image from "next/image";
import bannerAcervo from "@/src/assets/bannerAcervo.png";
import galeriaAcervo1 from "@/src/assets/galeriaAcervo1.png";
import galeriaAcervo2 from "@/src/assets/galeriaAcervo2.png";
import galeriaAcervo3 from "@/src/assets/galeriaAcervo3.png";
import galeriaAcervo4 from "@/src/assets/galeriaAcervo4.png";
import acervoFonte from "@/src/assets/acervoFonte.png";       

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="text-base text-[#f4c542]">✳</span>
      <h2 className="text-xs font-bold uppercase tracking-[0.28em] text-white/80">
        {children}
      </h2>
    </div>
  );
}

export default function AcervoPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <section className="relative min-h-[260px] overflow-hidden border-b border-white/10 lg:min-h-[360px]">
        <Image
          src={bannerAcervo}
          alt="Banner Acervo"
          fill
          priority
          className="object-cover object-center"
        />
         <div className="container-section relative z-10 pb-10 pt-20 lg:pb-16 lg:pt-28">
            <Image
              src={acervoFonte}
              alt="Extras"
              className="w-[280px] lg:w-[460px] object-contain"
              priority
            />
            <p className="text-white text-xs lg:text-sm uppercase tracking-[0.3em] font-semibold mt-3">
              Registros visuais, memórias e fragmentos históricos que <br></br>preservam a imagem e o legado de Tia Ciata.
            </p>
          </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.08)_0%,rgba(8,8,8,0.45)_45%,rgba(8,8,8,0.92)_100%)]" />

        <div className="relative z-10 mx-auto flex h-full min-h-[260px] max-w-7xl items-end px-4 py-12 sm:px-6 lg:min-h-[360px] lg:px-8 lg:py-16">
          <div className="max-w-3xl">

          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <SectionTitle>Galeria do Acervo</SectionTitle>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={galeriaAcervo1}
              alt="Galeria Acervo 1"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={galeriaAcervo2}
              alt="Galeria Acervo 2"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={galeriaAcervo3}
              alt="Galeria Acervo 3"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={galeriaAcervo4}
              alt="Galeria Acervo 4"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <SectionTitle>Conteúdo audiovisual</SectionTitle>

        <div className="space-y-3">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/2-5-_6w8EBQ"
              title="Vídeo do Acervo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="flex items-center justify-between px-1 text-xs text-white/40">
            <span>Vídeo do acervo</span>
            <span>Tia Ciata / Projeto Cultural</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <SectionTitle>Onde fica a Casa Tia Ciata</SectionTitle>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
          <iframe
            title="Mapa da Casa Tia Ciata"
            className="h-[420px] w-full"
            src="about:blank"
            loading="lazy"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(135deg,#3b2616_0%,#7a3c12_55%,#150f0a_100%)] px-6 py-10 shadow-[0_30px_90px_rgba(0,0,0,0.45)] sm:px-10 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              Projeto cultural
            </p>
            <h3 className="mt-3 text-3xl font-bold sm:text-4xl">
              O Legado Continua Vivo
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
              A memória de Tia Ciata permanece viva por meio de ações de
              preservação, divulgação e valorização da história negra e
              afro-brasileira.
            </p>

            <button className="mt-6 rounded-full border border-white/20 bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90">
              Saiba mais
            </button>
          </div>

          <div className="pointer-events-none absolute -right-10 bottom-0 hidden h-full w-1/2 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.14),_transparent_60%)] lg:block" />
        </div>
      </section>
    </main>
  );
}