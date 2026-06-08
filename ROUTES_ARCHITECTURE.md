# Arquitetura de Rotas da Aplicação

## Estrutura de Rotas

A aplicação utiliza o Next.js App Router com as seguintes rotas:

### Rotas Principais

| Rota         | Descrição          | Arquivo                  |
| ------------ | ------------------ | ------------------------ |
| `/`          | Página inicial     | `app/page.tsx`           |
| `/extras`    | Seção de Extras    | `app/extras/page.tsx`    |
| `/capitulos` | Seção de Capítulos | `app/capitulos/page.tsx` |
| `/creditos`  | Seção de Créditos  | `app/creditos/page.tsx`  |
| `/acervo`    | Seção de Acervo    | `app/acervo/page.tsx`    |
| `/sobre`     | Seção de Sobre     | `app/sobre/page.tsx`     |

## Estrutura de Arquivos

```
app/
├── page.tsx              # Página inicial
├── layout.tsx            # Layout raiz (Header, Footer)
├── extras/
│   └── page.tsx
├── capitulos/
│   └── page.tsx
├── creditos/
│   └── page.tsx
├── acervo/
│   └── page.tsx
└── sobre/
    └── page.tsx

src/constants/
└── routes.ts            # Constantes de rotas
```

## Constantes de Rotas

As rotas são centralizadas em `src/constants/routes.ts`:

```typescript
export const ROUTES = {
  HOME: "/",
  EXTRAS: "/extras",
  CAPITULOS: "/capitulos",
  CREDITOS: "/creditos",
  ACERVO: "/acervo",
  SOBRE: "/sobre",
};

export const navItems = [
  { title: "Extras", href: ROUTES.EXTRAS },
  { title: "Capítulos", href: ROUTES.CAPITULOS },
  { title: "Créditos", href: ROUTES.CREDITOS },
  { title: "Acervo", href: ROUTES.ACERVO },
  { title: "Sobre", href: ROUTES.SOBRE },
];
```

## Navegação no Header

Os headers (Desktop e Mobile) utilizam `Link` do Next.js para navegação entre rotas:

- **HeaderDesktop.tsx**: Menu de navegação para desktop
- **HeaderMobile.tsx**: Menu hamburger para mobile

Ambos importam as rotas de `src/constants/routes.ts` para manter consistência.

## Layout Padrão

O `app/layout.tsx` inclui:

- Header (Desktop e Mobile)
- Conteúdo da página via `{children}`
- ALivingLegacy (padrão em todas as páginas)
- Footer (padrão em todas as páginas)

## Como Adicionar Novas Rotas

1. Adicione a rota em `src/constants/routes.ts`
2. Crie uma pasta em `app/[nome-da-rota]/`
3. Crie um arquivo `page.tsx` dentro da pasta
4. Adicione o item ao array `navItems` em `src/constants/routes.ts` se quiser que apareça no header

Exemplo:

```typescript
// src/constants/routes.ts
export const ROUTES = {
  // ...
  NOVA_ROTA: "/nova-rota",
};

export const navItems = [
  // ...
  { title: "Nova Rota", href: ROUTES.NOVA_ROTA },
];
```

```typescript
// app/nova-rota/page.tsx
export default function NovaRota() {
  return <div>Conteúdo da nova rota</div>;
}
```
