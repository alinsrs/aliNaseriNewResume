<script setup>
import {computed, ref} from 'vue'
import ThemeToggle from './ThemeToggle.vue'
import {useDarkMode} from "../composables/useDarkMode.js";
import LanguageToggle from "./LanguageToggle.vue";

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const props = defineProps(["info"])

const { isDark } = useDarkMode();

const strokeColor = computed(() => isDark.value ? '#F8FAFC' : '#001427')

</script>

<template>
  <header
      class="bg-background-1 dark:bg-background-dark-1 border-b border-border-1 dark:border-border-dark-1 shadow-sm
             transition-all duration-200 ease-linear">

    <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo or Name -->
      <div class="text-xl font-bold text-text-1 dark:text-text-dark-1 transition-colors duration-[0s]">
        {{ info.name }}
      </div>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex gap-6 text-text-1 dark:text-text-dark-1 items-center transition-colors duration-[0s]">
        <a v-for="item in info.headerLinks" :href="'#' + item.link" class="transition-colors duration-[0s] z-50">
          {{ item.title }}
        </a>
        <ThemeToggle/>
        <LanguageToggle/>


      </nav>

      <!-- Mobile Hamburger -->
      <button class="md:hidden" @click="toggleMobileMenu">
        <svg
            v-if="!isMobileMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            :stroke="strokeColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            :stroke="strokeColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Mobile Nav -->
    <div v-if="isMobileMenuOpen"
         class="md:hidden bg-bg-light dark:bg-bg-dark text-text-1 dark:text-text-dark-1 px-4 pb-4 space-y-3">

      <a
          v-for="item in info.headerLinks"
          :href="item.link"
          class="block text-sm hover:text-primary transition-all duration-1000 ease-linear"
          @click="isMobileMenuOpen = false"
      >
        {{ item.title }}
      </a>
      <ThemeToggle/>
      <LanguageToggle/>


    </div>
  </header>
</template>

<style scoped>

</style>