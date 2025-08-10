<script setup>
import { useLanguage } from '../composables/useLanguage'

const { currentLanguage } = useLanguage()

const title = {
  fa: 'درباره من',
  en: 'About Me!'
}

const props = defineProps(['info'])
</script>

<template>
<div class="flex flex-col gap-5">
  <fieldset class="border-t-2 border-dotted border-border-dark-3 dark:border-border-3">
    <legend class="px-3 text-2xl font-bold">
      {{title[currentLanguage]}}
    </legend>
  </fieldset>
  <div class="px-6 leading-7.5 whitespace-pre-line">
    {{info.aboutDetailed}}
  </div>
</div>
</template>

<style scoped>

</style>