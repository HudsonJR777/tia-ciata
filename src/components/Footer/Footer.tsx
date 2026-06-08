import Image from "next/image";
import { logoHeader, SistemasDeInformaçãoLogo } from "@/src/assets";

export default function Footer() {
  return (
    <footer className="container-section px-4 py-6 sm:px-6 lg:px-10">
      <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#070707]/95 px-4 py-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:px-6 sm:py-8 lg:px-10 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1.8fr_1fr] lg:items-center">
          <div className="flex flex-col items-center justify-center gap-4 text-center lg:items-start lg:text-left lg:pr-8 lg:border-r lg:border-white/10">
            <div className="w-full max-w-[220px]">
              <Image
                src={logoHeader}
                alt="Matriarca do Samba"
                className="w-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 sm:gap-8 lg:px-8 lg:border-r lg:border-white/10 lg:py-0">
            <nav className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70 sm:gap-6 sm:text-sm">
              <a href="#" className="transition hover:text-white">
                Extras
              </a>
              <a href="#" className="transition hover:text-white">
                Capítulos
              </a>
              <a href="#" className="transition hover:text-white">
                Sobre
              </a>
              <a href="#" className="transition hover:text-white">
                Acervos
              </a>
            </nav>

            <div className="w-full border-t border-white/10 mt-4" />

            <div className="flex flex-wrap items-center justify-center gap-4 rounded-[28px] border border-white/10 bg-white/5 px-4 py-3 shadow-[0_6px_20px_rgba(0,0,0,0.22)] sm:gap-6 sm:px-6 mt-4">
              <div className="max-w-[130px] sm:max-w-[150px]">
                <Image
                  src={SistemasDeInformaçãoLogo}
                  alt="Sistemas de Informação"
                  className="w-full object-contain"
                />
              </div>
              <div className="hidden h-14 w-px bg-white/15 sm:block" />
              <div className="flex min-h-[52px] min-w-[88px] items-center justify-center rounded-[20px] bg-white/10 px-4 text-center text-[10px] uppercase tracking-[0.2em] text-white/80 sm:min-w-[110px] sm:text-xs">
                20 anos
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 text-center text-white lg:items-end lg:text-right">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80 sm:text-base">
              UFVJM - Universidade Federal dos Vales do Jequitinhonha e Mucuri
            </p>
            <p className="text-xs text-white/50 sm:text-sm">© 2026 UFVJM</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
