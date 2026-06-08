import Image from "next/image";
import imageIntroducao from "../../assets/div.relative.png";

export default function Introduction() {
  return (
    <section className="container-section bg-[#F2C23099] py-10 md:py-14 lg:py-20">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <div className="relative overflow-hidden rounded-[16px] h-[300px] md:h-[360px] lg:h-[800px] lg:w-[800px]">
          <Image
            src={imageIntroducao}
            alt="Imagem de introdução sobre Tia Ciata"
            fill
            className="object-cover lg:h-full lg:w-full"
          />
        </div>

        <div className="flex flex-col justify-center gap-6">
          <span className="text-3xl font-semibold leading-tight text-[#FFFFFF] md:text-4xl lg:text-[3.4rem]">
            Introdução
          </span>
          <p className="text-sm leading-6 text-[#FFFFFF] md:text-base md:leading-8 lg:text-lg lg:leading-9">
            Antes de o samba ser reconhecido como símbolo do Brasil, ele
            precisou sobreviver. E uma das pessoas mais importantes nessa
            história foi Tia Ciata, mulher negra, baiana, mãe de santo,
            quituteira, curandeira, líder comunitária e uma das grandes
            responsáveis por proteger as raízes da cultura afro-brasileira no
            Rio de Janeiro.
          </p>
          <p className="text-sm leading-6 text-[#FFFFFF] md:text-base md:leading-8 lg:text-lg lg:leading-9">
            Este projeto apresenta a trajetória e a importância de Tia Ciata
            para a cultura brasileira, destacando seu legado no samba, na
            religiosidade afro-brasileira e na identidade negra. Desenvolvido
            por alunos do curso de Sistemas de Informação na disciplina de
            Tópicos em Sistemas, o site une tecnologia e pesquisa histórica para
            preservar e divulgar sua memória.
          </p>
        </div>
      </div>
    </section>
  );
}
