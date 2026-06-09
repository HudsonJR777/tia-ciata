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
    description: "O Terreiro Expandido: Fé, Comida e Sociabilidade ",
    content: [
      {
        type: "paragraph",
        text: "Entrar no casarão número 117 da Rua Visconde de Itaúna, no início do século XX, significava mergulhar em um pedaço da África plantado bem no centro do Rio de Janeiro. Para Tia Ciata e a comunidade de baianos que vivia na região, aquela casa era muito mais do que um simples teto para morar, funcionando como um ponto de chegada para quem buscava um recomeço após o fim da escravidão. Naquela época, o governo tentava apagar as marcas da cultura negra com reformas que destruíam moradias populares e, por isso, ter um lugar de acolhimento era uma forma poderosa de continuar existindo com dignidade.",
      },
      {
        type: "image",
        src: BannerImageCapitulo2,
        alt: "Interior cultural com artefatos e objetos antigos",
        caption: "Imagens que representam a vida cotidiana no bairro.",
      },
      {
        type: "paragraph",
        text: "Tia Ciata exercia uma liderança que ia além do que vemos nos livros de história tradicionais, pois ela era uma respeitada iyálorixá, ou mãe de santo. Essa autoridade religiosa fazia de sua casa o centro de uma grande família de fé, onde os laços de união entre as pessoas muitas vezes eram mais fortes do que o parentesco de sangue. Dentro desse espaço, a religiosidade de matriz africana não ficava guardada em um canto, mas organizava cada detalhe do dia a dia, desde a forma de receber as visitas até o preparo das refeições.",
      },
      {
        type: "paragraph",
        text: "A cozinha da casa era o verdadeiro coração da hospitalidade e uma fonte de poder. Tia Ciata, sendo uma cozinheira de mão cheia, usava seus tabuleiros de quitutes não apenas para sustentar a família, mas para criar redes de contato que incluíam desde músicos iniciantes até políticos importantes da capital. Essa circulação de pessoas transformava a residência em um território onde negros, judeus, ciganos e intelectuais se encontravam, mostrando como o samba e a comida tinham a capacidade de unir grupos muito diferentes em torno de uma base africana.",
      },
      {
        type: "paragraph",
        text: "Nesse ambiente, a fé e a arte andavam de mãos dadas de uma forma que não dava para separar. O samba urbano que conhecemos hoje nasceu nesse solo sagrado, sendo uma continuação direta dos rituais de Candomblé que aconteciam no quintal. Os mesmos tambores que invocavam as divindades eram os que faziam vibrar as rodas de música, transformando o samba em uma forma de oração e em uma ferramenta para proteger as tradições contra a perseguição da polícia. Para garantir que essas festas continuassem acontecendo em um período em que a cultura negra era tratada como crime, Tia Ciata usava uma estratégia muito inteligente na divisão da casa. Na sala de visitas, que ficava de frente para a rua e para os olhos das autoridades, praticava-se o choro e as danças que a elite considerava aceitáveis. No entanto, bastava atravessar o corredor para chegar ao quintal, onde o samba de roda e o Candomblé aconteciam livremente, protegidos pelos muros e pelo respeito à hierarquia da casa.",
      },
      {
        type: "paragraph",
        text: "Essa casa-território serviu como um escudo cultural para toda a comunidade negra carioca. Ao acolher quem chegava e proteger os saberes dos ancestrais, Tia Ciata não foi apenas uma anfitriã, foi uma estrategista que garantiu que a identidade africana marcasse presença definitiva na construção do Brasil. O legado desse espaço nos ensina que a cultura é o jeito mais profundo de ocupar uma cidade e que a união de um povo é capaz de manter vivas as raízes que tentaram arrancar.",
      },
      {
        type: "paragraph",
        text: "A musicalidade que animava o quintal de Tia Ciata não era simples entretenimento: era um sistema ritual completo, onde cada toque percussivo carregava significado sagrado. Nos candomblés de nação ketu-nagô, o conjunto instrumental era formado por três atabaques — rum, rumpi e lé — e o gã ou agogô, que funcionava como uma espécie de maestro, estabelecendo as linhas-guia sobre as quais os demais instrumentos se organizavam. ",
      },
      {
        type: "image",
        src: chapterImage2,
        alt: "Ilustração de pessoas dançando e felizes",
      },
      {
        type: "paragraph",
        text: "Os ritmos que circulavam entre o terreiro e o quintal de Tia Ciata representavam um vocabulário musical preciso, onde cada toque carregava identidade e função ritual bem definidas. O ijexá, de andamento suave e cadência característica em 16 batidas, era originalmente dedicado a Oxum — orixá das águas doces, cuja dança ele sustentava nos terreiros. Como aponta Angela Lühning, citada por Ikeda, o ritmo vem de Ilesha, cidade da Nigéria onde predomina o culto dessa divindade. O barravento carregava energia mais intensa, associado aos momentos de maior tensão ritual, quando a fronteira entre o aiê — o mundo dos homens — e o orum — o espaço dos orixás — se tornava mais tênue, segundo a cosmologia nagô descrita por Fonseca. ",
      },
      {
        type: "image",
        src: chapterImage2,
        alt: "Ilustração de pessoas dançando e felizes",
      },
      {
        type: "paragraph",
        text: "Já o alujá era o toque de Xangô, orixá da justiça e do trovão, com pulsação vibrante e marcial que remetia à força dessa divindade — classificado por Fonseca como linha-guia de 12 batidas, presente nas festas do terreiro nos momentos de maior exaltação. O aguerê, toque de Oxóssi, orixá da caça e das matas, tinha levada mais leve e saltitante, evocando o movimento ágil do caçador. Quando esses quatro toques deixavam o contexto estritamente ritual e passavam a animar as rodas do quintal, carregavam consigo toda uma cosmologia — plantando na música popular brasileira raízes que muitos ouvem até hoje sem reconhecer sua origem nos terreiros. ",
      },
    ],
  },
  {
    id: "3",
    title: "Capítulo 3",
    banner: BannerImageCapitulo3,
    description: "Entre o Salão e o Quintal: A Diplomacia do Samba",
    content: [
      {
        type: "paragraph",
        text: "Imagina ter que esconder o que você é só pra não ser preso por isso.",
      },
      {
        type: "paragraph",
        text: "Era exatamente isso que acontecia no Rio de Janeiro do início do século XX. O samba, aquele ritmo que hoje é símbolo do Brasil para o mundo inteiro, era perseguido. Os tambores podiam ser apreendidos, quem dançasse, tocasse ou celebrasse as tradições afro-brasileiras corria o risco de ser detido pela polícia. A cultura negra estava na mira.",
      },
      {
        type: "paragraph",
        text: "Mas Tia Ciata não abaixou a cabeça. Ela fez algo mais inteligente do que isso. Na frente da casa dela, na Pequena África carioca, tudo parecia dentro do esperado. Músicas 'aceitas', encontros cordiais, uma aparência de normalidade que as autoridades da época não tinham o que questionar. Ela sabia jogar esse jogo, não por fraqueza, mas por estratégia. A frente da casa era o escudo.",
      },
      {
        type: "image",
        src: chapterImage3,
        alt: "Mapa da casa da Tia Ciata"
      },
      {
        type: "paragraph",
        text: "Nos fundos, no quintal, a verdade acontecia.",
      },
      {
        type: "paragraph",
        text: "Ali os tambores soavam. As rodas de samba se formavam. As histórias, os ritmos e as celebrações que vieram da África atravessando o Atlântico dentro das pessoas continuavam vivos. O quintal era o lugar onde ninguém precisava se diminuir. Onde a herança não era escondida, mas protegida.",
      },
      {
        type: "paragraph",
        text: "Tia Ciata entendeu algo que muita gente ainda demora para aprender: resistir não significa sempre confrontar diretamente. Às vezes, resistir é garantir que o que te pertence continue existindo, de um jeito ou de outro, apesar de tudo.",
      },
      {
        type: "paragraph",
        text: "O samba que nasceu naquele quintal está em todo lugar hoje. Nas escolas de samba, nos shows, nas ruas, nos sons que você provavelmente já cantou sem saber de onde veio. Essa história chegou até você porque alguém, um dia, teve a sabedoria e a coragem de protegê-la.",
      },
      {
        type: "paragraph",
        text: "Esse alguém foi Tia Ciata.",
      },
    ],
  },
  {
    id: "4",
    title: "Capítulo 4",
    banner: BannerImageCapitulo4,
    description: "Negociadora Astuta: Além do Estereótipo da 'Heroína Calada'",
    content: [
      {
        type: "paragraph",
        text: "Quando falam sobre Tia Ciata, muita gente lembra apenas do samba. Mas a verdade é que ela foi muito mais do que isso. Imagina viver em uma época em que a sua fé podia fazer a polícia invadir sua casa. Em que tocar samba podia ser motivo de prisão. Em que ser negro e manter suas tradições culturais já era visto como ameaça.",
      },
      {
        type: "paragraph",
        text: "Foi nesse cenário que Tia Ciata se tornou uma das mulheres mais influentes da cultura negra no Brasil. Diferente da imagem silenciosa que muitas vezes tentam passar dela, Tia Ciata não era apenas uma figura acolhedora ou “boazinha”. Ela era estrategista. Sabia negociar, proteger os seus e usar sua influência para manter viva a cultura negra em um período de muita perseguição.",
      },
      {
        type: "paragraph",
        text: "Seu poder não vinha de cargos políticos nem de dinheiro. Vinha do respeito. Da sabedoria. Da liderança construída dentro da comunidade preta.",
      },
      {
        type: "paragraph",
        text: "Conhecida pelos conhecimentos sobre ervas, benzimentos e práticas de cura ligadas às tradições afro-brasileiras, Tia Ciata ajudava pessoas em uma época em que a população negra quase não tinha acesso à saúde ou proteção do Estado. Seu cuidado com os outros fez com que ela se tornasse uma referência importante no Rio de Janeiro.",
      },
      {
        type: "paragraph",
        text: "Mas sua atuação ia muito além da cura física. Tia Ciata entendia que cuidar das pessoas também era proteger sua cultura, sua fé e sua identidade. E foi justamente aí que sua inteligência política apareceu.",
      },
      {
        type: "paragraph",
        text: "Existe um episódio muito conhecido envolvendo o presidente Venceslau Brás. Segundo relatos históricos e tradições orais, o presidente sofria com uma ferida na perna que não melhorava, mesmo após diversos tratamentos médicos. Foi então que indicaram Tia Ciata, já reconhecida pelos seus conhecimentos tradicionais de cura. Ela teria sido chamada até o Palácio do Catete, sede do governo federal na época, para ajudar no tratamento do presidente. Em uma sociedade extremamente racista, esse episódio teve um peso enorme. Uma mulher negra, ligada a práticas perseguidas pelo preconceito, agora era procurada por alguém do mais alto nível político do país. Depois da recuperação de Venceslau Brás, Tia Ciata ganhou ainda mais respeito e influência social. Mas o mais importante foi a maneira inteligente como ela utilizou esse reconhecimento.",
      },
      {
        type: "image",
        src: chapterImage3,
        alt: "Mapa da casa da Tia Ciata"
      },
      {
        type: "paragraph",
        text: "Naquele período, o samba e as manifestações culturais negras eram constantemente perseguidos pela polícia. As rodas de samba eram vistas pelas elites como algo “perigoso”, e encontros ligados às religiões afro-brasileiras sofriam repressão. Com o prestígio conquistado, Tia Ciata conseguiu mais proteção para sua casa e para os encontros culturais realizados ali. Sua influência ajudou a diminuir perseguições contra o samba, os encontros religiosos e as tradições afro-brasileiras.",
      },
      {
        type: "image",
        src: chapterImage3,
        alt: "Mapa da casa da Tia Ciata"
      },
      {
        type: "paragraph",
        text: "Enquanto muitos tentavam apagar tudo que vinha da cultura negra, Tia Ciata encontrava maneiras inteligentes de garantir que essas tradições sobrevivessem.",
      },
      {
        type: "paragraph",
        text: "Por isso, enxergar Tia Ciata apenas como uma “tia do samba” diminui sua verdadeira importância histórica.",
      },
      {
        type: "paragraph",
        text: "Ela foi articuladora cultural. Foi liderança comunitária. Foi estrategista. Foi uma mulher negra que transformou cuidado, sabedoria e conhecimento ancestral em formas de resistência e proteção cultural.",
      },
      {
        type: "paragraph",
        text: "Seu legado mostra que resistir nem sempre acontece no grito. Às vezes, acontece no cuidado, na união e na capacidade de abrir caminhos para que o seu povo continue existindo. E até hoje, quando o samba ocupa espaços e a cultura negra ganha voz, existe um pouco da força de Tia Ciata presente nessa história.",
      },
    ],
  },
   {
    id: "5",
    title: "Capítulo 5",
    banner: BannerImageCapitulo5,
    description: "Samba como Ato Político e Desconstrução do Mito Racial",
    content: [
      {
        type: "paragraph",
        text: "A trajetória de Hilária Batista de Almeida, a Tia Ciata, atravessa as fronteiras do tempo e se consolida como um dos pilares mais profundos da formação da identidade cultural do Brasil. Longe de ser apenas uma personagem do passado ou uma figura coadjuvante da história oficial, ela foi uma agente ativa, cuja sabedoria e capacidade de articulação moldaram a cultura urbana e a própria ideia de nação.",
      },
      {
        type: "paragraph",
        text: "No início do século XX, o projeto de modernização do Rio de Janeiro, fortemente inspirado em padrões eurocêntricos e evidenciado pelas reformas urbanas do prefeito Pereira Passos, buscava promover uma 'higienização' social. Esse processo resultou na demolição de cortiços, na expulsão das populações mais pobres e negras do centro e na criminalização de suas expressões coletivas por meio de mecanismos como a lei da vadiagem.",
      },
      {
        type: "paragraph",
        text: "Nesse cenário excludente do pós-abolição, onde a liberdade formal não garantia cidadania ou inclusão, a resistência ao apagamento histórico tornou-se vital. A atuação de Tia Ciata transformou o que o Estado tentava rotular como 'vadiagem' ou 'perigo' em um potente polo de afirmação identitária. As festas e encontros em sua casa funcionavam como pontos fundamentais de recuperação emocional e fortalecimento comunitário, onde as pessoas encontravam o equilíbrio necessário para enfrentar o preconceito e a hostilidade do lado de fora. Ao abrigar e legitimar manifestações outrora marginalizadas, como o samba, ela pavimentou o caminho para que uma prática cultural de matriz africana fosse, com o tempo, reconhecida e celebrada como o maior símbolo da identidade brasileira para o mundo inteiro.",
      },
      {
        type: "paragraph",
        text: "O legado de Tia Ciata também ressignifica as lógicas de coletividade e apoio mútuo. Em sua residência na Praça Onze, a ideia de família extrapolava os laços de sangue e abraçava o sentido pleno de comunidade. Como uma liderança acolhedora, ela recebia os baianos que migravam para o Rio de Janeiro, incentivava sua fixação na região da Pequena África e os auxiliava na busca por emprego e moradia, estruturando redes de suporte material e simbólico essenciais para a sobrevivência da população negra.",
      },
      {
        type: "image",
        src: chapterImage3,
        alt: "Mapa da casa da Tia Ciata"
      },
      {
        type: "paragraph",
        text: "Essa rede de apoio não se isolava, mas se destacava pelo seu caráter agregador e plural. A casa de Tia Ciata era um ponto de confluência onde se encontravam negros, judeus, islâmicos, ciganos e intelectuais da época. Essa rica convivência e diversidade cultural demonstram o poder do samba como elemento de união e diálogo, capaz de conectar diferentes realidades em torno de uma base fundamentada na matriz africana.",
      },
      {
        type: "paragraph",
        text: "Estudar e resgatar a imagem de Tia Ciata é um exercício fundamental para desconstruir os estereótipos historicamente atribuídos à mulher negra. A historiografia tradicional muitas vezes a colocou sob uma ótica passiva, limitando-a ao papel de 'heroína calada e paciente' ou apenas de uma 'anfitriã' acolhedora. Por outro lado, rotulá-la exclusivamente sob o estigma da 'guerreira' inflexível pode retirar dela o direito humano à fragilidade.",
      },
      {
        type: "image",
        src: chapterImage3,
        alt: "Mapa da casa da Tia Ciata"
      },
      {
        type: "paragraph",
        text: "Tia Ciata se impõe na história real como uma figura complexa de empoderamento, astúcia e liderança política. Ela foi mãe de santo, quituteira, trabalhadora, produtora de eventos e uma negociadora estratégica que utilizava seu prestígio para abrir caminhos e garantir a continuidade dos saberes de seu povo. A apropriação de sua verdadeira história pelas novas gerações é um passo crucial para combater a falsa ideia de uma 'democracia racial' no Brasil, expondo as dificuldades reais enfrentadas no passado enquanto se valoriza quem de fato construiu as bases da nossa cultura.",
      },
      {
        type: "paragraph",
        text: "A herança deixada por Tia Ciata não ficou restrita às memórias do antigo casarão da Rua Visconde de Itaúna, de onde emanaram os acordes de 'Pelo Telefone' e as bases do samba urbano carioca. Esse patrimônio permanece vivo e em constante movimento através das gerações.",
      },
      {
        type: "image",
        src: chapterImage3,
        alt: "Mapa da casa da Tia Ciata"
      },
      {
        type: "paragraph",
        text: "Com o objetivo de salvaguardar e perpetuar essa história contra o esquecimento, seus descendentes,liderados por sua bisneta, Gracy Mary Moreira, fundaram em 2007 a Organização Cultural Remanescentes de Tia Ciata (ORTC). Hoje, esse trabalho de preservação ganha corpo na Casa da Tia Ciata, localizada na Rua Camerino, nº 05, no Centro do Rio de Janeiro, estrategicamente próxima ao Cais do Valongo. Funcionando como museu e centro cultural dinâmico, o espaço mantém a essência do antigo quintal da Praça Onze: promove rodas de samba, oficinas e roteiros turísticos pela Pequena África. Dessa forma, garante-se que a ancestralidade, a solidariedade e o protagonismo negro continuem ecoando nas ruas e na identidade de um Brasil que jamais deve invisibilizar as suas matrizes fundamentais.",
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
