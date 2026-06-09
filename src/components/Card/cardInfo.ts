import { cardImage7 } from "@/src/assets";
import cardImage1 from "../../assets/cardImage1.png";
import cardImage2 from "../../assets/cardImage2.png";
import cardImage3 from "../../assets/cardImage3.png";
import cardImage5 from "../../assets/cardImage5.png";

import {
  cardInfoBadgesHistoryHistoria,
  cardInfoBadgesHistoryIdentity,
  cardInfoBadgesHistoryLegado,
} from "./badgesInfo";

export const cardInfo = {
  history: [
    {
      image: cardImage1,
      title: "O Território do Reencontro",
      badges: [
        {
          title: cardInfoBadgesHistoryHistoria.history[0],
        },
        {
          title: cardInfoBadgesHistoryHistoria.history[1],
        },
        {
          title: cardInfoBadgesHistoryHistoria.history[2],
        },
        {
          title: cardInfoBadgesHistoryHistoria.history[3],
        },
      ],
    },
    {
      image: cardImage3,
      title: "O Território do Reencontro",
      badges: [
        {
          title: cardInfoBadgesHistoryHistoria.history[4],
        },
        {
          title: cardInfoBadgesHistoryHistoria.history[5],
        },
        {
          title: cardInfoBadgesHistoryHistoria.history[6],
        },
        {
          title: cardInfoBadgesHistoryHistoria.history[4],
        },
      ],
    },
  ],

  legacy: [
    {
      image: cardImage5,
      title: "A Estratégia da Resistência",
      badges: [
        {
          title: cardInfoBadgesHistoryLegado.legado[0],
        },
        {
          title: cardInfoBadgesHistoryLegado.legado[1],
        },
        {
          title: cardInfoBadgesHistoryLegado.legado[2],
        },
        {
          title: cardInfoBadgesHistoryLegado.legado[3],
        },
      ],
    },
    {
      image: cardImage2,
      title: "O Poder da Cura e Liderança",
      badges: [
        {
          title: cardInfoBadgesHistoryLegado.legado[4],
        },
        {
          title: cardInfoBadgesHistoryLegado.legado[5],
        },
        {
          title: cardInfoBadgesHistoryLegado.legado[6],
        },
        {
          title: cardInfoBadgesHistoryLegado.legado[7],
        },
      ],
    },
  ],

  Identity: [
    {
      image: cardImage7,
      title: "Legado e Identidade",
      badges: [
        {
          title: cardInfoBadgesHistoryIdentity.identity[0],
        },
        {
          title: cardInfoBadgesHistoryIdentity.identity[1],
        },
        {
          title: cardInfoBadgesHistoryIdentity.identity[2],
        },
      ],
    },
    {
      image: cardImage2,
      title: "O Poder da Cura e Liderança",
      badges: [
        {
          title: cardInfoBadgesHistoryLegado.legado[4],
        },
        {
          title: cardInfoBadgesHistoryLegado.legado[5],
        },
        {
          title: cardInfoBadgesHistoryLegado.legado[6],
        },
        {
          title: cardInfoBadgesHistoryLegado.legado[7],
        },
      ],
    },
  ],
};
