<script setup lang="ts">
const userStore = useUserStore()
</script>

<template>
  <div my-auto flex flex-col items-center gap-5>
    {{ $t('sentences.connected-user:') }} <pre class="mb-8 text-left">{{ userStore.user }}</pre>
    <button class="text-sm btn" @click="userStore.logout">
      {{ $t('actions.logout') }}
    </button>
  </div>
</template>
