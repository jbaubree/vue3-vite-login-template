<script setup lang="ts">
const { t } = useI18n()
const { isConnected, error } = useUser()
const router = useRouter()
const userStore = useUserStore()

const username = ref('')
const password = ref('')

watch(isConnected, (value) => {
  if (value)
    router.push({ name: 'index' })
})
</script>

<template>
  <div class="flex flex-col items-center gap-5 my-auto">
    <p>
      <em class="text-sm opacity-75">{{ t('words.login') }}</em>
    </p>

    <input
      v-model="username"
      class="input"
      :placeholder="t('words.username')"
      type="text"
    >
    <input
      v-model="password"
      class="input"
      :placeholder="t('words.password')"
      type="password"
    >

    <button
      class="btn text-sm"
      @click="userStore.login({ username, password })"
    >
      {{ t('actions.sign-in') }}
    </button>
    <span v-if="error">{{ error }}</span>
  </div>
</template>
