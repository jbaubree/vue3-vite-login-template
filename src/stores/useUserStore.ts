import { jwtDecode } from 'jwt-decode'
import { acceptHMRUpdate, defineStore } from 'pinia'
import type { DecodedUserFromToken, User, UserCredentials } from '~/types'

const useUserStore = defineStore('user', {
  state: () => ({
    user: undefined as User | undefined,
    error: undefined as unknown,
  }),
  getters: {
    isAuthenticated: (state) => {
      if (!state.user?.token)
        return false
      return (jwtDecode(state.user.token) as DecodedUserFromToken).exp > Math.floor(Date.now() / 1000)
    },
  },
  actions: {
    async login(credentials: UserCredentials) {
      const { data, isPending, error } = useRequest('/auth/login', { data: credentials, method: 'POST' }, { immediate: true })

      watch(isPending, (value) => {
        if (!value && !error) {
          const { token, id } = data.value
          this.$patch({
            user: {
              token,
              id,
            },
          })
        }
      })

      watch(error, (value) => {
        if (value)
          this.$patch({ error: value })
      })
    },
    logout() {
      this.$reset()
      this.router.push({ name: 'login' })
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))

export default useUserStore
