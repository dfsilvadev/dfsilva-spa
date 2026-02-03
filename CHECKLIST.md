# Checklist – Validação das libs e configurações

Use este checklist para validar se a instalação e as configurações estão corretas.

**Última validação:** todos os itens conferidos e comandos executados com sucesso.

---

## 1. ESLint

- [x] **Instalação**: `pnpm list eslint` — deve listar `eslint`
- [x] **Config**: existe `eslint.config.js` na raiz
- [x] **Execução**: `pnpm run lint` — termina sem erros (ou apenas avisos esperados)
- [x] **Fix**: `pnpm run lint:fix` — aplica correções automáticas

---

## 2. Prettier

- [x] **Instalação**: `pnpm list prettier` — deve listar `prettier`
- [x] **Config**: existem `.prettierrc` e `.prettierignore` na raiz
- [x] **Format check**: `pnpm run format:check` — verifica formatação
- [x] **Format write**: `pnpm run format` — formata os arquivos
- [x] **Integração ESLint**: em `eslint.config.js` estão `eslint-config-prettier` e `eslint-plugin-prettier` (sem conflito de regras)

---

## 3. Husky

- [x] **Instalação**: `pnpm list husky` — deve listar `husky`
- [x] **Pasta**: existe `.husky/` na raiz
- [x] **Hook**: existe `.husky/pre-commit` com `pnpm exec lint-staged`
- [x] **Prepare**: no `package.json`, o script `"prepare": "husky"` está definido
- [ ] **Teste**: após `git add` e `git commit`, o hook pre-commit roda (lint-staged) — _validar manualmente ao fazer commit_

---

## 4. Lint-staged

- [x] **Instalação**: `pnpm list lint-staged` — deve listar `lint-staged`
- [x] **Config**: no `package.json` existe a chave `"lint-staged"` com:
  - `*.{ts,tsx}` → `eslint --fix` e `prettier --write`
  - `*.{css,json,md}` → `prettier --write`
- [ ] **Teste**: ao fazer commit de um `.ts` ou `.tsx`, apenas os arquivos staged são lintados/formatados — _validar manualmente ao fazer commit_

---

## 5. Vitest

- [x] **Instalação**: `pnpm list vitest` — deve listar `vitest`
- [x] **Config**: em `vite.config.ts` existe `test: { globals, environment: 'jsdom', setupFiles, include }`
- [x] **Setup**: existe `src/test/setup.ts` importando `@testing-library/jest-dom`
- [x] **Scripts**: `pnpm run test` (watch), `pnpm run test:run` (uma vez), `pnpm run test:ui` (interface)
- [x] **Execução**: `pnpm run test:run` — todos os testes passam
- [x] **Exemplo**: existe pelo menos um teste (ex.: `src/App.test.tsx`)

---

## 6. i18next

- [x] **Instalação**: `pnpm list i18next react-i18next i18next-browser-languagedetector` — todos listados
- [x] **Config**: existe `src/i18n/index.ts` com `i18n.use(LanguageDetector).use(initReactI18next).init(...)`
- [x] **Traduções**: existem arquivos em `src/i18n/locales/` (ex.: `pt.json`, `en.json`)
- [x] **Uso no app**: `main.tsx` importa `./i18n` antes do `App`
- [x] **Uso em componente**: algum componente usa `useTranslation()` e `t('chave')` — ex.: `src/pages/Home.tsx`

---

## 7. Phosphor React

- [x] **Instalação**: `pnpm list phosphor-react` — deve listar `phosphor-react`
- [x] **Uso**: algum componente importa ícone, ex.: `import { House } from 'phosphor-react'` e usa `<House size={48} />` — ex.: em `src/pages/Home.tsx` e `src/AppLayout.tsx`

---

## 8. React Router (v7)

- [x] **Instalação**: `pnpm list react-router` — versão ^7.x
- [x] **Imports**: `createBrowserRouter` e componentes (Link, Outlet) de `react-router`; `RouterProvider` de `react-router/dom`
- [x] **Config**: existe `src/routes.tsx` com `createBrowserRouter` e `RouterProvider`
- [x] **Layout**: existe layout com `<Outlet />` (ex.: `src/AppLayout.tsx`)
- [x] **Rotas**: pelo menos `/` e `/about` (ou equivalentes) definidas
- [x] **App**: `App.tsx` renderiza `<Routes />` e `main.tsx` renderiza `<App />`
- [ ] **Navegação**: links com `<Link to="...">` funcionam e a URL muda — _validar no browser com `pnpm run dev`_

---

## 9. Zod

- [x] **Instalação**: `pnpm list zod` — deve listar `zod`
- [x] **Uso**: existe exemplo de schema e tipo (ex.: `src/lib/validation.example.ts` com `z.object(...)` e `z.infer`)

---

## 10. Yup

- [x] **Instalação**: `pnpm list yup` — deve listar `yup`
- [x] **Uso**: existe exemplo de schema (ex.: `src/lib/validation.example.ts` com `yup.object(...)` e `yup.InferType`)

---

## 11. Tailwind CSS

- [x] **Instalação**: `pnpm list tailwindcss @tailwindcss/vite` — ambos listados
- [x] **Vite**: em `vite.config.ts` o plugin `tailwindcss()` está nos `plugins`
- [x] **CSS**: em `src/index.css` (ou arquivo principal de CSS) existe `@import 'tailwindcss';`
- [x] **Uso**: classes Tailwind em uso (ex.: `className="flex gap-4 p-4"`) — ex.: em `src/pages/Home.tsx`, `src/AppLayout.tsx`

---

## 12. GSAP

- [x] **Instalação**: `pnpm list gsap` — deve listar `gsap`
- [x] **Uso**: pode ser usado em qualquer componente com `import gsap from 'gsap'` e `gsap.to(...)` ou `gsap.from(...)` quando precisar de animações (opcional para validação mínima: só conferir que o pacote está instalado)

---

## 13. Framer Motion

- [x] **Instalação**: `pnpm list framer-motion` — deve listar `framer-motion`
- [x] **Uso**: algum componente usa `motion` (ex.: `<motion.div initial=... animate=...>`) — ex.: em `src/pages/About.tsx`

---

## Comandos rápidos de validação

```bash
# Lint e formatação
pnpm run lint
pnpm run format:check

# Testes
pnpm run test:run

# Build
pnpm run build

# Dev (abrir no browser e testar rotas, i18n, ícones)
pnpm run dev
```

---

## Resumo

| Lib           | Config principal                               | Como validar                   |
| ------------- | ---------------------------------------------- | ------------------------------ |
| ESLint        | `eslint.config.js`                             | `pnpm run lint`                |
| Prettier      | `.prettierrc`, `.prettierignore`               | `pnpm run format:check`        |
| Husky         | `.husky/pre-commit`                            | `git commit` (deve rodar hook) |
| Lint-staged   | `package.json` → `lint-staged`                 | Idem ao commit                 |
| Vitest        | `vite.config.ts` → `test`, `src/test/setup.ts` | `pnpm run test:run`            |
| i18next       | `src/i18n/index.ts`, `locales/*.json`          | Ver texto traduzido na UI      |
| Phosphor      | —                                              | Ver ícones na UI               |
| React Router  | `src/routes.tsx`, `AppLayout.tsx`              | Navegar entre / e /about       |
| Zod / Yup     | Exemplo em `src/lib/validation.example.ts`     | Importar e usar em form        |
| Tailwind      | `vite.config.ts`, `@import 'tailwindcss'`      | Ver estilos na UI              |
| GSAP          | —                                              | `pnpm list gsap`               |
| Framer Motion | —                                              | Ver animação em About          |

Quando todos os itens estiverem marcados, a instalação e as configurações estão validadas.

**Itens que exigem validação manual:** teste do hook Husky (ao fazer commit), lint-staged (arquivos staged) e navegação no browser (`pnpm run dev` → / e /about).
