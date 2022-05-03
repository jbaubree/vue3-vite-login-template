import type { UserModule } from '~/types'

export const install: UserModule = ({ isClient, router }) => {
  if (!isClient)
    return

  const { isConnected } = useUser()

  router.beforeEach((to) => {
    if (to.name === 'login' && isConnected.value)
      router.push({ name: 'index' })
    if ((to.name !== 'login' && to.name !== 'all') && !isConnected.value)
      router.push({ name: 'login' })
  })
}
