# Estrutura de Capítulos Dinâmica

## Visão Geral

Criada uma estrutura dinâmica para reutilizar o mesmo template em todos os capítulos. As páginas de capítulos agora são renderizadas a partir de dados centralizados e podem ser facilmente expandidas.

## Arquivos Criados/Modificados

### 1. **Componente CommonBanner** 
- **Local:** `src/components/Common/CommonBanner.tsx`
- **Descrição:** Componente genérico que reutiliza a lógica do BannerHero
- **Props:**
  - `src` (StaticImageData): Imagem do banner
  - `alt` (string): Texto alternativo
  - `priority` (boolean): Carregamento prioritário (default: true)

### 2. **Constantes de Capítulos**
- **Local:** `src/constants/chapters.ts`
- **Descrição:** Array centralizando dados de todos os capítulos
- **Interface:**
  ```typescript
  interface Chapter {
    id: string;
    title: string;
    banner: StaticImageData;
    description: string;
    content: string;
  }
  ```

### 3. **Página Dinâmica de Capítulos**
- **Local:** `app/capitulos/[id]/page.tsx`
- **Descrição:** Renderiza capítulos dinamicamente baseado no `id` da rota
- **Funcionalidades:**
  - Busca o capítulo pelo ID
  - Retorna 404 se não encontrado
  - Usa CommonBanner para o hero section
  - Aplica estilizações padronizadas

### 4. **Página de Listagem**
- **Local:** `app/capitulos/page.tsx`
- **Descrição:** Listagem em grid responsivo de todos os capítulos
- **Breakpoints:**
  - Mobile: 1 coluna
  - Tablet: 2 colunas
  - Desktop: 3 colunas

### 5. **Estilos Globais (CSS)**
- **Local:** `app/globals.css`
- **Classes adicionadas:**
  - `.chapter-title`: Título amarelo (#FEC40F), 23px, bold, Inter
  - `.chapter-description`: Descrição em gray claro
  - `.chapter-content`: Conteúdo com suporte a tipografia estruturada
  - Responsividade para mobile, tablet e desktop

### 6. **Página Home Atualizada**
- **Local:** `app/page.tsx`
- **Mudança:** Substituído BannerHero direto pelo CommonBanner

## Como Usar

### Adicionar um Novo Capítulo

1. Adicione a imagem do banner em `src/assets/`
2. Atualize `src/constants/chapters.ts`:

```typescript
export const chapters: Chapter[] = [
  // ... existing chapters
  {
    id: "4",
    title: "Capítulo 4",
    banner: bannerCapitulo4,
    description: "Nova seção da história...",
    content: `<p>Conteúdo do capítulo 4...</p>`,
  },
];
```

3. A rota será automaticamente disponível em `/capitulos/4`

### Estrutura de Rotas

- `/capitulos` → Listagem de capítulos
- `/capitulos/1` → Capítulo 1
- `/capitulos/2` → Capítulo 2
- ... e assim por diante

## Responsividade

Implementada em 3 breakpoints:

| Device | Tamanho | Mudanças |
|--------|---------|----------|
| Mobile | < 768px | Título 20px, padding reduzido |
| Tablet | 768px - 1024px | Layout médio |
| Desktop | > 1024px | Título 23px, padding 89px |

## Estilização do Título

**Especificações:**
- Font-size: 23px (desktop), 20px (mobile)
- Font-weight: 700 (Bold)
- Font-family: Inter
- Color: #FEC40F (Amarelo/Dourado)
- Line-height: 36px (desktop), 30px (mobile)
- Letter-spacing: -0.48px
- Vertical-align: middle

## Próximos Passos

Para completar a implementação:

1. Adicionar mais capítulos em `src/constants/chapters.ts`
2. Importar imagens dos banners
3. Preencher conteúdo HTML em cada capítulo
4. Testar responsividade em diferentes dispositivos
