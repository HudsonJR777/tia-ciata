export interface Batuque {
  id: string;
  name: string;
  audioSrc: string;
  videoUrl: string;
  sambaExampleLabel: string;
  sambaReferenceUrl: string;
}

export const chapter02Batuques: Batuque[] = [
  {
    id: "ijexa",
    name: "Ijexá",
    audioSrc: "/audio/ijexa.wav",
    videoUrl: "https://www.youtube.com/watch?v=8zCnLgFrMLk",
    sambaExampleLabel: "O Mar Serenou — Clara Nunes",
    sambaReferenceUrl: "https://www.youtube.com/watch?v=drGewMyo00A",
  },
  {
    id: "barravento",
    name: "Barravento",
    audioSrc: "/audio/barravento.wav",
    videoUrl: "https://www.youtube.com/watch?v=V5eZcftMpbY",
    sambaExampleLabel:
      "Churrasquinho do Menos é Mais — Fatalmente/ Separação/ Temporal",
    sambaReferenceUrl: "https://www.youtube.com/watch?v=I5Rl73wFmWs&t=360s",
  },
  {
    id: "aluja",
    name: "Alujá",
    audioSrc: "/audio/aluja.wav",
    videoUrl: "https://www.youtube.com/watch?v=Kcs9msLsATA",
    sambaExampleLabel: "Meu Nome é Favela — Arlindo Cruz",
    sambaReferenceUrl: "https://www.youtube.com/watch?v=fK3-ZtUT-RI",
  },
  {
    id: "aluere",
    name: "Aluerê",
    audioSrc: "/audio/aluere.wav",
    videoUrl: "https://www.youtube.com/watch?v=V4YuKEfGA64",
    sambaExampleLabel: "Oxóssi — Roque Ferreira",
    sambaReferenceUrl: "https://www.youtube.com/watch?v=RoiKoBQ-XlY",
  },
];
