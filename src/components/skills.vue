<script setup>
import {ref, computed} from 'vue'
import {useLanguage} from '../composables/useLanguage'

const {currentLanguage} = useLanguage()

const title = {
  fa: 'مهارت‌های من',
  en: 'My Skills'
}

const props = defineProps(['info'])

const showAll = ref(false)

const displayedSkills = computed(() => {
  return showAll.value ? props.info.skills : props.info.skills.slice(0, 3)
})

function toggleShow() {
  showAll.value = !showAll.value
}
</script>


<template>
  <div class="w-full flex flex-col gap-6">
    <fieldset class="border-t-2 border-dotted border-border-dark-3 dark:border-border-3">
      <legend class="px-3 text-2xl font-bold">
        {{ title[currentLanguage] }}
      </legend>
    </fieldset>

    <div class="w-full flex flex-col gap-3 justify-center items-center px-4">
      <div
          class="flex gap-8 justify-between items-center w-full"
          v-for="skill in displayedSkills"
          :key="skill.title"
      >
        <div class="min-w-20 flex flex-col justify-center items-center gap-2">
          <img :src="skill.imgSrc" :alt="skill.title" class="w-16">
          <div class="font-semibold text-lg">
            {{ skill.title }}
          </div>
        </div>
        <div class="w-full">
          <div class="h-8 min-w-full w-full bg-background-3 dark:bg-border-dark flex shadow-lg"
                :class="currentLanguage === 'fa' ? 'justify-end' : 'justify-start'"
          >
            <div
                :style="{width: skill.percent + '%' }"
                class="bg-text-4 dark:bg-background-dark-5 h-full flex items-center justify-center text-white transition-all duration-300"
            >
              {{ skill.percent || '0%' }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- More / Less Button -->
    <div class="flex justify-center">
      <button
          @click="toggleShow"
          class="px-4 py-2 mt-2 border border-gray-400 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-800
           transition"
      >
        {{ showAll ? (currentLanguage === 'fa' ? 'کمتر' : 'Less') : (currentLanguage === 'fa' ? 'بیشتر' : 'More') }}
      </button>
    </div>
  </div>
</template>
