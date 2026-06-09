# Documentação do Projeto Tia-Ciata

Esta documentação foi elaborada sob a perspectiva de um engenheiro de software sênior para auxiliar no entendimento arquitetural, tecnológico e de convenções do projeto "Tia-Ciata". 

## 1. Visão Geral
O projeto **Tia-Ciata** é uma aplicação web moderna construída para apresentar conteúdo cultural e histórico de forma rica e interativa. A aplicação é focada em performance, acessibilidade e escalabilidade, utilizando tecnologias de ponta do ecossistema React.

## 2. Stack Tecnológica
A aplicação utiliza um stack moderno baseado em TypeScript e no ecossistema Next.js:

- **Framework Principal:** [Next.js](https://nextjs.org/) (versão 16.2.6) utilizando o **App Router**.
- **Bibliotecas UI:** [React](https://react.dev/) e [React DOM](https://react.dev/) (versão 19.2.4).
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (versão ^5) com tipagem estrita para maior segurança e previsibilidade no código.
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/) (versão ^4) com PostCSS, garantindo um design system utilitário e responsivo.
- **Componentes Adicionais:** `react-alice-carousel` para criação de carrosséis interativos.
- **Ferramentas de Desenvolvimento:** ESLint para linting de código, garantindo padronização e boas práticas.

## 3. Arquitetura do Projeto

O projeto adota uma arquitetura modularizada que separa responsabilidades entre as páginas (rotas) e a lógica de apresentação/negócio (componentes e hooks).

### 3.1. Estrutura de Diretórios
```text
/home/tiago-secundo/Projects/Tia-Ciata/
├── app/                  # Rotas da aplicação (Next.js App Router)
├── src/
│   ├── assets/           # Recursos estáticos (imagens, SVGs)
│   ├── components/       # Componentes React reutilizáveis e isolados
│   ├── constants/        # Valores estáticos e constantes globais (ex: rotas)
│   └── hooks/            # Custom hooks do React (ex: useMediaQuery)
├── public/               # Assets públicos (favicon, ícones base)
└── (Arquivos de configuração na raiz: package.json, tsconfig.json, tailwind.config.ts)
```

### 3.2. Roteamento (App Router)
O gerenciamento de rotas é feito de forma declarativa utilizando o App Router do Next.js. As rotas estão mapeadas fisicamente no diretório `app/` e centralizadas em `src/constants/routes.ts` para evitar magic strings.

Rotas Atuais:
- `/` - Página Inicial (`app/page.tsx`)
- `/extras` - Extras (`app/extras/page.tsx`)
- `/capitulos` - Capítulos (`app/capitulos/page.tsx`)
- `/creditos` - Créditos (`app/creditos/page.tsx`)
- `/acervo` - Acervo (`app/acervo/page.tsx`)
- `/sobre` - Sobre (`app/sobre/page.tsx`)

O layout global (`app/layout.tsx`) é responsável por injetar componentes comuns a todas as páginas, como `Header`, `ALivingLegacy` e `Footer`.

## 4. Boas Práticas e Convenções

Para manter a base de código escalável e de fácil manutenção, os desenvolvedores devem aderir às seguintes convenções:

1. **Tipagem Estrita (TypeScript):**
   - Evitar o uso de `any`.
   - Definir interfaces explícitas para as `props` de todos os componentes.
   - Utilizar inferência de tipos onde for seguro, mas manter a clareza nas assinaturas de funções e hooks.

2. **Organização de Componentes:**
   - Cada componente em `src/components/` deve ter seu próprio diretório contendo o arquivo principal (ex: `Component.tsx`), arquivos auxiliares (ex: `ComponentMobile.tsx`) e constantes específicas do componente.
   - Componentes devem ser agnósticos de contexto de negócio sempre que possível para facilitar a reutilização.

3. **Gerenciamento de Estado e Lógica:**
   - Lógica complexa de UI ou regras que envolvem ciclo de vida devem ser extraídas para **Custom Hooks** (em `src/hooks/`), como o `useMediaQuery.ts` já existente.
   - Minimizar o uso de estados globais quando o estado puder ser derivado ou mantido localmente.

4. **Estilização com Tailwind CSS:**
   - Manter as classes utilitárias organizadas.
   - Para lógicas de classes condicionais complexas, considere o uso de bibliotecas auxiliares como `clsx` ou `tailwind-merge` (se for necessário adicionar no futuro).
   - Seguir as orientações de design responsivo do Tailwind (mobile-first).

5. **Constantes:**
   - Evitar strings soltas no código (magic strings). Todas as rotas, textos repetitivos de configuração e chaves devem estar centralizados no diretório `src/constants/`.

## 5. Scripts Disponíveis (NPM/Yarn/PNPM)

No diretório do projeto, você pode executar:

- `npm run dev`: Inicia o servidor de desenvolvimento em modo watch com webpack. (Acessível em `http://localhost:3000`).
- `npm run build`: Cria a versão otimizada de produção da aplicação.
- `npm run start`: Inicia o servidor Next.js servindo os arquivos do build.
- `npm run lint`: Executa o ESLint para verificar a qualidade e os padrões do código.

## 6. Próximos Passos (Para Novos Agentes e Desenvolvedores)
- **Leitura de Código:** Para entender a implementação de componentes de layout, inicie pelo `app/layout.tsx` e pelos arquivos no diretório `src/components/Header` e `src/components/Footer`.
- **Modificações de Rota:** Sempre atualize `src/constants/routes.ts` ao adicionar ou remover páginas.
- **Novas Features:** Certifique-se de que novos componentes sejam modulares, possuam testes (se aplicável ao escopo da tarefa futura) e respeitem a paleta de cores e sistema de tipografia definidos no Tailwind.
