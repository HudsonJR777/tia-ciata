import { StaticImageData } from "next/image";
import chapterImage2 from "@/src/assets/galeriaAcervo2.png";
import chapterImage3 from "@/src/assets/CulturalShowcaseOne.png";
import capituloFotoCortico from "@/src/assets/capituloFotoCortico.png";
import capituloMapaPatrimonio from "@/src/assets/capituloMapaPatrimonio.png";
import capituloFotoMorro from "@/src/assets/capituloFotoMorro.png";
import {
  BannerCapitulo1,
  BannerImageCapitulo2,
  BannerImageCapitulo3,
  BannerImageCapitulo4,
  BannerImageCapitulo5,
} from "../assets";

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
    title: "A Diáspora Baiana e a Fundação da Pequena África",
    banner: BannerCapitulo1,
    description: "A Diáspora Baiana e a Fundação da Pequena África",
    content: [
      {
        type: "paragraph",
        text: "Quando os navios negreiros finalmente pararam de cruzar o Atlântico e a abolição foi assinada em 1888, o Brasil não ofereceu às pessoas recém-libertadas nem terra, nem trabalho, nem pertencimento. O que o Estado entregou foi uma liberdade sem chão — um papel que dizia 'você é livre' sem dizer para onde ir, como comer ou onde dormir. Foi nesse vazio que muitos baianos, descendentes dos povos iorubás e de outras nações africanas, fizeram uma escolha: partir para o Rio de Janeiro em busca de recomeço.",
      },
      {
        type: "paragraph",
        text: "Essa migração não foi apenas um deslocamento de corpos. Foi o movimento de uma civilização inteira tentando se replantar em solo hostil.",
      },
      {
        type: "paragraph",
        text: "A Praça Onze e os arredores da Zona Portuária da capital federal se tornaram o ponto de chegada natural para esses migrantes. Ali, onde o cheiro do mar se misturava com o barulho dos trapiches e o vai e vem das cargas, formou-se aquilo que o músico e compositor Heitor dos Prazeres mais tarde chamaria de Pequena África. Não era um nome oficial em mapa nenhum, mas era o nome verdadeiro de um território que pulsava com a memória de quem havia sobrevivido ao maior crime coletivo da história moderna.",
      },
      {
        type: "image",
        src: capituloMapaPatrimonio,
        alt: "Mapa do Patrimônio da Pequena África no Rio de Janeiro",
        caption:
          "Os pontos de memória da Pequena África na Zona Portuária do Rio de Janeiro.",
      },
      {
        type: "paragraph",
        text: 'Nesse espaço, as ruas estreitas e os cortiços apertados guardavam algo que nenhuma reforma urbana conseguiu destruir completamente: a capacidade de um povo de reconstituir seus laços. As chamadas "tias baianas" — mulheres negras, em geral iyálorixás ou ligadas às tradições de candomblé — foram as grandes arquitetas dessa reconstrução. Com seus tabuleiros de quitutes nas ruas e suas casas abertas para quem chegava, elas transformaram a precariedade imposta em um projeto coletivo de sobrevivência e identidade.',
      },
      {
        type: "paragraph",
        text: "Não era saudade o que movia essas mulheres e suas comunidades. Era estratégia. A Pequena África não foi um gueto formado por exclusão, mas um território forjado pela inteligência de pessoas que entenderam que, sem um lugar de referência, sem um espaço onde a língua, a fé e os ritmos ancestrais pudessem existir livremente, a liberdade formal seria apenas uma nova forma de apagamento.",
      },
      {
        type: "paragraph",
        text: "Foi nesse chão que Hilária Batista de Almeida, a Tia Ciata, fincou raízes. Nascida em Santo Amaro da Purificação, na Bahia, em 1854, ela chegou ao Rio ainda jovem e logo se tornou uma das figuras centrais dessa diáspora baiana. Sua trajetória encarna o movimento de toda uma geração: a de quem não esperou que o Brasil os reconhecesse, mas tratou de construir, tijolo por tijolo e tambor por tambor, um Brasil que os contivesse.",
      },
      {
        type: "image",
        src: capituloFotoMorro,
        alt: "Fotografia histórica do Morro da Providência durante o Bota-abaixo",
        caption:
          'O "Bota-abaixo" do prefeito Pereira Passos destruiu casas e memórias inteiras na virada do século XX.',
      },
      {
        type: "paragraph",
        text: 'A fotografia do "Bota-abaixo" — como ficaram conhecidas as demolições promovidas pelo prefeito Pereira Passos no início do século XX — registra com brutalidade o que esse projeto de modernização eurocêntrico significava na prática: casas derrubadas, famílias despejadas, memórias reduzidas a entulho. Mas o que nenhuma câmera fotografou foi o que acontecia depois da destruição. A capacidade de reunir os fragmentos, de reconstruir em outro lugar o que foi demolido, de manter viva a cosmovisão africana mesmo quando as paredes físicas desapareciam.',
      },
      {
        type: "paragraph",
        text: "A Pequena África foi, portanto, muito mais do que um bairro. Foi um ato de resistência geográfica. Um território onde a identidade negra se recusou a ser invisível e onde as bases culturais do Brasil que conhecemos hoje foram silenciosamente assentadas, longe dos holofotes da história oficial e sob o olhar desconfiado de um Estado que fingia não ver o que não queria reconhecer.",
      },
      {
        type: "image",
        src: capituloFotoCortico,
        alt: "Fotografia histórica de cortiço na Zona Portuária do Rio de Janeiro",
        caption:
          "Os cortiços da Zona Portuária foram o primeiro abrigo de muitos migrantes baianos.",
      },
      {
        type: "paragraph",
        text: "A Pequena África foi, portanto, muito mais do que um bairro. Foi um ato de resistência geográfica. Um território onde a identidade negra se recusou a ser invisível e onde as bases culturais do Brasil que conhecemos hoje foram silenciosamente assentadas, longe dos holofotes da história oficial e sob o olhar desconfiado de um Estado que fingia não ver o que não queria reconhecer.",
      },
    ],
  },
  {
    id: "2",
    title: "Capítulo 2",
    banner: BannerImageCapitulo2,
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
    banner: BannerImageCapitulo3,
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
  {
    id: "4",
    title: "Capítulo 4",
    banner: BannerImageCapitulo4,
    description: "A transformação da identidade",
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
  {
    id: "5",
    title: "Capítulo 5",
    banner: BannerImageCapitulo5,
    description: "A transformação da identidade",
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
