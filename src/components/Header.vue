<script setup lang="ts">
import { useDarkMode } from '~/composables'

const { toggleDark } = useDarkMode()
const { availableLocales, locale } = useI18n()

const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <nav class="flex items-center justify-center text-xl">
    <button class="icon-btn" @click="toggleDark()">
      <div i="fa-solid-sun dark:fa-solid-moon" />
    </button>

    <a class="icon-btn" @click="toggleLocales">
      {{ locale.toUpperCase() }}
    </a>
  </nav>
</template>
