<script setup lang="ts">
const userStore = useUserStore()
</script>

<template>
  <div flex flex-col items-center gap-5 my-auto>
    {{ $t('sentences.connected-user:') }} <pre class="text-left mb-8">{{ userStore.user }}</pre>
    <button class="btn text-sm" @click="userStore.logout">
      {{ $t('actions.logout') }}
    </button>
  </div>
</template>
