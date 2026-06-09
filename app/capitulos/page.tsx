import Image from "next/image";
import Link from "next/link";
import { chapters } from "@/src/constants/chapters";

export default function Capitulos() {
  return (
    <div className="dark:bg-black min-h-screen">
      <main className="container-section py-20">
        <div className="flex flex-col gap-12">
          {/* Título da Página */}
          <h1 className="chapter-title">Capítulos</h1>

          {/* Grade de Capítulos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {chapters.map((chapter) => (
              <Link
                key={chapter.id}
                href={`/capitulos/${chapter.id}`}
                className="group bg-white/5 hover:bg-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <div className="relative w-full h-48 lg:h-56 overflow-hidden">
                  <Image
                    src={chapter.banner}
                    alt={chapter.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-[#FEC40F] font-bold text-lg mb-2 group-hover:text-yellow-300 transition-colors">
                    {chapter.title}
                  </h2>
                  <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors">
                    {chapter.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
