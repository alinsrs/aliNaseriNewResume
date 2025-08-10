<script setup>
import { useLanguage } from '../composables/useLanguage'
import { usePersonInformationStore } from '../stores/staticData.js'

const { currentLanguage, toggleLanguage } = useLanguage()
const personStore = usePersonInformationStore()

function onToggle() {
  toggleLanguage()
  personStore.changeLanguage(currentLanguage.value)
}
</script>

<template>
  <button @click="onToggle"
          class="flex items-center gap-2 px-3 h-10 rounded border border-background-dark-3 dark:border-background-3 transition-all duration-200 text-sm">
    <span v-if="currentLanguage === 'fa'">🇮🇷 FA</span>
    <span v-else>🇺🇸 EN</span>
  </button>
</template>
