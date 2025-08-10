<script setup>
import {useLanguage} from '../composables/useLanguage'

const {currentLanguage} = useLanguage()

const title = {
  fa: 'سوابق تحصیلی من',
  en: 'My Educations'
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

    <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="education in info.educations"
           class="w-full rounded-lg box-shadow drop-shadow-lg grid grid-cols-3 gap-2 md:gap-4 p-4 bg-background-4 dark:bg-background-dark-3 max-w-[600px]">
        <div class="flex flex-col gap-2 col-span-2">
          <h3 class="font-bold text">
            {{ education.fieldOfStudy }}
          </h3>
          <h3>
            {{education.institution}}
          </h3>
          <div class="w-full flex gap-3 justify-start items-start">
            <div class="min-w-fit">
              {{ education.degreeTitle }} :
            </div>
            <div class="flex flex-wrap">
              {{ education.degree }}
            </div>
          </div>
          <div class="min-w-fit">
            {{ education.startTitle }} : {{ education.start }}
          </div>
          <div class="min-w-fit">
            {{ education.endTitle }} : {{ education.end }}
          </div>
        </div>
        <div class="flex justify-center items-center">
          <img :src="education.institutionLogo" class="w-30 not-dark:filter not-dark:brightness-0" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>