
<p align='center'>
Vue3 Vite Simple Login Starter Template based on <b>Vitesse</b><sup><em>(by @antfu)</em></sup>
</p>

<br>

## Features

- β‘οΈ [Vue 3](https://github.com/vuejs/vue-next), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- π [File based routing](./src/pages)

- π¦ [Components auto importing](./src/components)

- π [State Management via Pinia](https://pinia.esm.dev/)

- π [Layout system](./src/layouts)

- π² [PWA](https://github.com/antfu/vite-plugin-pwa)

- π¨ [UnoCSS](https://github.com/antfu/unocss) - the instant on-demand atomic CSS engine

- π [Use icons from any icon sets with classes](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- π [I18n ready](./locales)

- π₯ Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

- π€π» [Reactivity Transform](https://vuejs.org/guide/extras/reactivity-transform.html) enabled

- π₯ [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly

- π¨ Static-site generation (SSG) via [vite-ssg](https://github.com/antfu/vite-ssg)

- π¦Ύ TypeScript, of course

- βοΈ Deploy on Netlify, zero-config

<br>

## Pre-packed

### UI Frameworks

- [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [πIcΓ΄nes](https://icones.netlify.app/)
- [Pure CSS Icons via UnoCSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

### Plugins

- [Vue Router](https://github.com/vuejs/vue-router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - layouts for pages
- [Pinia](https://pinia.esm.dev) - Intuitive, type safe, light and flexible Store for Vue using the composition api
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - components auto import
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
- [`vite-plugin-pwa`](https://github.com/antfu/vite-plugin-pwa) - PWA
- [Vue I18n](https://github.com/intlify/vue-i18n-next) - Internationalization
  - [`vite-plugin-vue-i18n`](https://github.com/intlify/vite-plugin-vue-i18n) - Vite plugin for Vue I18n
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs
- [`vite-ssg-sitemap`](https://github.com/jbaubree/vite-ssg-sitemap) - Sitemap generator
- [`@vueuse/head`](https://github.com/vueuse/head) - manipulate document head reactively

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/) with [@antfu/eslint-config](https://github.com/antfu/eslint-config), single quotes, no semi.

## Try it now!

> This template requires Node >=14.18

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Change the author name in `LICENSE`
- [ ] Change the title in `App.vue`
- [ ] Change the favicon in `public`
- [ ] Clean up the README

And, enjoy :)

## Usage

### Development

Just run and visit http://localhost:3333

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.

### Deploy on Netlify

Go to [Netlify](https://app.netlify.com/start) and select your clone, `OK` along the way, and your App will be live in a minute.
