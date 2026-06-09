"use client";

import Image from "next/image";
import sobreTitle from "@/src/assets/sobre.png";
import bannerSobre from "@/src/assets/bannerHomemMulher.png";
import MeetTheTeam from "@/src/components/MeetTheTeam/MeetTheTeam";
import computadorSobreNos from "@/src/assets/computadorSobreNos.png";


const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m10 0h3a2 2 0 0 0 2-2v-3" />
        <path d="M9 9l6 6M15 9l-6 6" />
      </svg>
    ),
    title: "Desenvolvimento Web",
    description:
      "O projeto foi construído utilizando React, buscando oferecer uma experiência moderna, intuitiva e responsiva para diferentes dispositivos.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "Revista Digital Interativa",
    description:
      "A proposta inicial consistia na criação de uma revista digital voltada para estudantes do ensino médio. Como solução, optamos por desenvolver uma plataforma.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
      </svg>
    ),
    title: "Cultura e Memória",
    description:
      "Por meio da tecnologia, o site preserva e divulga a trajetória de Tia Ciata, ampliando o acesso ao patrimônio histórico e à cultura afro-brasileira.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Projeto Acadêmico",
    description:
      "Desenvolvido por estudantes do curso de Sistemas de Informação da UFVJM, da disciplina de Tópicos em Sistemas de Informação, ministrada pela professora Geruza.",
  },
];

export default function Sobre() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <main>
        {/* Banner Hero */}
        <section className="relative w-full overflow-hidden min-h-[260px] lg:min-h-[340px] flex items-end">
          <Image
            src={bannerSobre}
            alt="Banner Sobre"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-transparent" />

          <div className="container-section relative z-10 pb-10 pt-20 lg:pb-16 lg:pt-28">
            <Image
              src={sobreTitle}
              alt="Sobre"
              className="w-[200px] lg:w-[320px] object-contain"
              priority
            />
            <p className="text-white text-xs lg:text-sm uppercase tracking-[0.3em] font-semibold mt-3">
              Arte feita por um trabalho acadêmico
            </p>
          </div>
        </section>

        {/* O Projeto */}
        <section className="container-section py-16 lg:py-24">
          {/* Título da seção */}
          <div className="flex items-center gap-3 mb-12">
            <span className="text-white text-lg">✳</span>
            <h2 className="text-white text-xs lg:text-sm font-bold uppercase tracking-[0.22em]">
              O Projeto
            </h2>
          </div>

          {/* Título principal */}
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-5xl font-black leading-tight mb-4">
              Preservando Memórias,
              <br />
              Compartilhando Histórias
            </h3>
            <p className="text-white/60 text-sm lg:text-base max-w-2xl mx-auto leading-relaxed">
              Uma plataforma digital desenvolvida por estudantes da UFVJM
              para valorizar o legado de Tia Ciata e ampliar o acesso à cultura afro-brasileira.
            </p>
          </div>

          {/* Imagem do laptop/mockup */}
          <div className="relative w-full max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.6)] bg-[#111]">
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-[#1a0a00] to-[#0a0a1a]">
              <div className="text-center text-white/20">
              <Image
              src={computadorSobreNos}
              alt="Computador mostrando o site"
              className="w-[2500px] lg:w-[3500px] object-contain"
              priority
            />
              </div>
            </div>
          </div>

          {/* Grid de features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col gap-3">
                <div className="w-12 h-12 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h4 className="text-white font-bold text-base lg:text-lg">
                  {feature.title}
                </h4>
                <p className="text-white/60 text-sm lg:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Créditos da Equipe */}
        <section className="py-8 lg:py-12">
          <div className="container-section mb-8">
            <div className="flex items-center gap-3">
              <span className="text-white text-lg">✳</span>
              <h2 className="text-white text-xs lg:text-sm font-bold uppercase tracking-[0.22em]">
                Créditos da Equipe
              </h2>
            </div>
          </div>
          <MeetTheTeam />
        </section>
      </main>
    </div>
  );
}