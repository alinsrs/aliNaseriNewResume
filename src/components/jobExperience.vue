<script setup>
import { useLanguage } from '../composables/useLanguage'

const { currentLanguage } = useLanguage()

const title = {
  fa: 'سوابق شغلی من',
  en: 'Job Experiences'
}

const props = defineProps(['info'])
</script>

<template>
  <div class="w-full flex flex-col gap-8">
    <fieldset class="w-full border-t-2 border-dotted border-border-dark-3 dark:border-border-3">
      <legend class="px-3 text-2xl font-bold">
        {{ title[currentLanguage] }}
      </legend>
    </fieldset>
    <div class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
      <div v-for="jobExperience in info.jobExperiences"
           class="w-full rounded-lg box-shadow drop-shadow-lg flex flex-col gap-2 md:gap-4 p-4 bg-background-4 dark:bg-background-dark-3">
        <h3 class="font-bold text">
          {{ jobExperience.companyName }}
        </h3>
        <div class="w-full flex gap-3 justify-start items-start line-clamp-2">
          <div class="min-w-fit">
            {{ jobExperience.roleTitle }} :
          </div>
          <div class="flex flex-wrap">
            {{ jobExperience.role }}
          </div>
        </div>
        <div class="min-w-fit">
          {{ jobExperience.startTitle }} : {{ jobExperience.start }}
        </div>
        <div class="min-w-fit">
          {{ jobExperience.endTitle }} : {{ jobExperience.end }}
        </div>

        <div class="w-full flex flex-wrap gap-3 justify-start items-start">
          <div class="min-w-fit">
            {{ jobExperience.projectsTitle }} :
          </div>
          <div class="w-full flex flex-wrap wrap-break-word text-left justify-end">
            {{ jobExperience.projects }}
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>