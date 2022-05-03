export default function useUser() {
  const userStore = useUserStore()

  const isConnected = computed(() => !!userStore.getUser?.token)
  const token = computed(() => userStore.getUser?.token)
  const user = computed(() => userStore.getUser)
  const error = computed(() => userStore.getError)

  return {
    user,
    token,
    error,
    isConnected,
  }
}
