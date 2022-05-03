<script setup lang="ts">
const { logout } = useUserStore()
const { user } = useUser()
const { t } = useI18n()
</script>

<template>
  <div flex flex-col items-center gap-5 my-auto>
    {{ t('sentences.connected-user:') }} <pre class="text-left mb-8">{{ user }}</pre>
    <button class="btn text-sm" @click="logout">
      {{ t('actions.logout') }}
    </button>
  </div>
</template>
