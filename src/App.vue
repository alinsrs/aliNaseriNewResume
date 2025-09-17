<script setup>
import {computed} from 'vue'
import {useDarkMode} from './composables/useDarkMode.js'
import {usePersonInformationStore} from './stores/staticData.js'


useDarkMode()

const personStore = usePersonInformationStore()
const info = computed(() => personStore.getPersonInfo)


import Header from "./components/Header.vue";
import Sidebar from "./components/sidebar.vue";
import AboutMe from "./components/aboutMe.vue";
import JobExperience from "./components/jobExperience.vue";
import Skills from "./components/skills.vue";
import Education from "./components/education.vue";
</script>

<template>
  <div class="min-h-screen bg-background-1 dark:bg-background-dark-1 transition-all duration-200 ease-linear">
    <Header :info="info" class="sticky top-0 z-40"></Header>
    <main class="mt-4 md:mt-8 md:px-4">
      <!-- Page content -->
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 max-w-[1920px] w-[90%] mx-auto justify-center items-start">
        <aside class="bg-background-2 dark:bg-background-dark-2 text-text-1 dark:text-text-dark-1 col-span-2 xl:col-span-1
         rounded-xl p-3 transition-all duration-200 ease-linear lg:sticky lg:top-24">
          <sidebar :info="info"></sidebar>
        </aside>
        <div
            class="lg:col-span-2 xl:col-span-3 bg-background-2 text-text-1 dark:bg-background-dark-2 dark:text-text-dark-1 rounded-xl p-5
            transition-all duration-200 ease-linear flex flex-col gap-6">
          <aboutMe :info="info" id="about" class="scroll-mt-20"></aboutMe>
          <jobExperience :info="info" id="job" class="scroll-mt-20"></jobExperience>
          <skills  :info="info" id="skills" class="scroll-mt-20"></skills>
          <education :info="info" id="educations" class="scroll-mt-20"></education>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>

</style>
