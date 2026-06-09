"use client";

import Image from "next/image";
import bannerAcervo from "@/src/assets/bannerAcervo.png";
import viesAlgoritmoAcervo from "@/src/assets/viesAlgoritmoAcervo.png";
import VideoGoogleDrive from "@/src/components/VideoGoogleDrive/VideoGoogleDrive";

export default function Acervo() {
  return (
    <div className="dark:bg-black min-h-screen">
      <section>
        <Image
          src={bannerAcervo}
          alt="Banner Acervo"
          priority
          className="h-full w-full object-cover"
        />
      </section>

      <div className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center text-white">
          {/* Espaço reservado para frase entre as imagens */}
          <p className="text-lg leading-relaxed text-white/80">
            {/* Adicione sua frase aqui */}
          </p>
        </div>
      </div>

      <section className="px-3 py-20">
        <h2 className="text-5xl font-bold text-white mb-12">✦ Do Passado ao Futuro: Representatividade e Tecnologia</h2>
        <div className="flex gap-8 items-start">
          {/* Imagem */}
          <div className="flex-shrink-0 max-w-4xl">
            <Image
              src={viesAlgoritmoAcervo}
              alt="Viés Algoritmo Acervo"
              width={3200}
              height={1400}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Texto */}
          <div className="flex-1">
            <p className="text-2xl leading-relaxed text-white/80">
              O legado de <strong className="text-white font-bold">Tia Ciata</strong> nos lembra da importância da representatividade e do reconhecimento de grupos historicamente marginalizados. Hoje, esses debates também estão presentes na tecnologia.
            </p>
            <p className="text-2xl leading-relaxed text-white/80 mt-6">
              <strong className="text-white font-bold">O vídeo a seguir aborda o tema do viés algorítmico e mostra como sistemas de Inteligência Artificial podem reproduzir desigualdades quando não são desenvolvidos de forma ética e inclusiva.</strong>
            </p>
            <p className="text-2xl leading-relaxed text-white/80 mt-6">
              Refletir sobre esses desafios é uma forma de conectar passado, presente e futuro na construção de uma sociedade mais justa.
            </p>
          </div>
        </div>
      </section>

      <section className="px-3 py-20">
        <div className="max-w-6xl mx-auto">
          <VideoGoogleDrive
            videoId="177vLNXw-rdUF-B6-bkXmEdK-dq26mRUj"
            title="Viés Algorítmico - Tia Ciata"
          />
        </div>
      </section>

      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">Acervo</h1>
        <div className="text-white/80">
          <p>Conteúdo em desenvolvimento...</p>
        </div>
      </main>
    </div>
  );
}
