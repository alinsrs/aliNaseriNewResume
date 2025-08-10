<!-- components/ThemeToggle.vue -->
<template>
  <button @click="toggleTheme"
          class="px-3 h-10 rounded border border-background-dark-3 dark:border-background-3 transition-all duration-200 ease-linear
           text-text-1 dark:text-text-dark-1 text-sm">
    {{ isDark ? '🌙 Dark' : '☀️ Light' }}
  </button>
</template>

<script setup>
import {ref, onMounted} from 'vue';

const isDark = ref(false);

onMounted(() => {
  // Check localStorage or fallback to system preference
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    isDark.value = true;
  } else {
    document.documentElement.classList.remove('dark');
    isDark.value = false;
  }
});

function toggleTheme() {
  isDark.value = !isDark.value;

  if (isDark.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}
</script>
