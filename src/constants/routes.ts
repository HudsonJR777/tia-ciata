export const ROUTES = {
  HOME: "/",
  EXTRAS: "/extras",
  CAPITULOS: "/capitulos",
  CREDITOS: "/creditos",
  ACERVO: "/acervo",
  SOBRE: "/sobre",
} as const;

export const navItems = [
  {
    title: "Extras",
    href: ROUTES.EXTRAS,
  },
  {
    title: "Capítulos",
    href: ROUTES.CAPITULOS,
  },
  // {
  //   title: "Créditos",
  //   href: "#",
  // },
  {
    title: "Acervo",
    href: ROUTES.ACERVO,
  },
  {
    title: "Sobre",
    href: ROUTES.SOBRE,
  },
];
