import { StaticImageData } from "next/image";
import bannerChapter1 from "@/src/assets/bannerAcervo.png";
import bannerChapter2 from "@/src/assets/bannerSobre.png";
import bannerChapter3 from "@/src/assets/aHistoria.png";
import chapterImage1 from "@/src/assets/galeriaAcervo1.png";
import chapterImage2 from "@/src/assets/galeriaAcervo2.png";
import chapterImage3 from "@/src/assets/CulturalShowcaseOne.png";

export type ChapterBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "image"; src: StaticImageData; alt: string; caption?: string }
  | { type: "list"; ordered?: boolean; items: string[] };

export interface Chapter {
  id: string;
  title: string;
  banner: StaticImageData;
  description: string;
  content: ChapterBlock[];
}

export const chapters: Chapter[] = [
  {
    id: "1",
    title: "Capítulo 1",
    banner: bannerChapter1,
    description: "A Diáspora Baiana e a Fundação da Pequena África",
    content: [
      {
        type: "paragraph",
        text: "Quando os navios negreiros finalmente pararam de cruzar o Atlântico e a abolição foi assinada em 1888, o Brasil não ofereceu às pessoas recém-libertadas nem terra, nem trabalho, nem pertencimento.",
      },
      {
        type: "image",
        src: chapterImage1,
        alt: "Ruas históricas da Pequena África",
        caption: "O desenho das ruas e as casas que abrigaram a comunidade.",
      },
      {
        type: "heading",
        level: 2,
        text: "A primeira razão social",
      },
      {
        type: "paragraph",
        text: "Na primeira fase, a cultura negra se organizou em torno de pequenos empreendimentos, terreiros e rodas de samba improvisadas. O cotidiano era feito de resistência, música e uma rede de ajuda mútua que passava de uma família para outra.",
      },
      {
        type: "list",
        items: [
          "Feiras de rua e compras coletivas",
          "Rodas de samba para comemorar conquistas",
          "Cultos religiosos e festas comunitárias",
        ],
      },
      {
        type: "paragraph",
        text: "Esse primeiro capítulo mostra como o bairro virou um território de criação cultural, onde o som e a memória foram construídos como uma forma de sobrevivência.",
      },
    ],
  },
  {
    id: "2",
    title: "Capítulo 2",
    banner: bannerChapter2,
    description: "Entre vozes e contrapontos da cidade",
    content: [
      {
        type: "paragraph",
        text: "O segundo capítulo acompanha o movimento das pessoas pelas vielas, o comércio que se espalhou e as histórias de transformação urbana. Cada esquina tinha um canto de esperança.",
      },
      {
        type: "image",
        src: chapterImage2,
        alt: "Interior cultural com artefatos e objetos antigos",
        caption: "Imagens que representam a vida cotidiana no bairro.",
      },
      {
        type: "heading",
        level: 2,
        text: "As passagens que atravessam gerações",
      },
      {
        type: "paragraph",
        text: "As memórias da região foram transmitidas de geração em geração. O capricho dos artesãos, a música dos poetas populares e a comida dos vendedores ambulantes foram parte dessa herança.",
      },
      {
        type: "list",
        items: [
          "Pratos típicos vendidos nas esquinas",
          "Histórias contadas em oficinas comunitárias",
          "Canções compostas para as pessoas do bairro",
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Capítulo 3",
    banner: bannerChapter3,
    description: "O legado que se manteve vivo",
    content: [
      {
        type: "paragraph",
        text: "Este capítulo finaliza com a forma como as marcas daquele tempo ainda estão presentes nas festas, na linguagem e no patrimônio imaterial. O passado vive no agora.",
      },
      {
        type: "image",
        src: chapterImage3,
        alt: "Apresentação cultural em palco",
        caption: "A cultura segue viva em manifestações artísticas.",
      },
      {
        type: "heading",
        level: 2,
        text: "A herança que não se perde",
      },
      {
        type: "paragraph",
        text: "As novas gerações recebiam das anteriores um acervo de sambas, versos e gestos. Essa transmissão manteve o sentimento de pertencimento e criou novos modos de se ver na cidade.",
      },
    ],
  },
];
