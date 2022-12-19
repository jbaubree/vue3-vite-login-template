import type { UserModule } from '~/types'

export const install: UserModule = ({ isClient, router }) => {
  if (!isClient)
    return

  const userStore = useUserStore()

  router.beforeEach((to) => {
    if (to.name === 'login' && userStore.isAuthenticated)
      router.push({ name: 'index' })
    if ((to.name !== 'login' && to.name !== 'all') && !userStore.isAuthenticated)
      router.push({ name: 'login' })
  })
}
