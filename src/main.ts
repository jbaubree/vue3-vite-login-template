import generatedRoutes from '~pages'
import { setupLayouts } from 'virtual:generated-layouts'

import { ViteSSG } from 'vite-ssg'
import App from '~/App.vue'
import type { UserModule } from '~/types'

import '@unocss/reset/tailwind.css'
import './styles/main.scss'
import 'uno.css'

const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
  },
)
