<script setup>

const props = defineProps(['info'])
</script>

<template>
  <div class="w-full flex flex-col items-center justify-center gap-3">
    <div class="w-[75%] group aspect-square overflow-clip rounded-full shadow border flex items-end justify-center">
      <img src="../assets/AliNaseriPortrait.png" alt="Ali Naseri Portrait" class="group-hover:scale-110 transition-all duration-300"/>
    </div>
    <div class="flex flex-col items-center justify-center gap-3">
      <div class="text-text-1 dark:text-text-dark-1 text-lg font-bold">
        {{info.name}}
      </div>
      <div class="text-text-1 dark:text-text-dark-1 text-sm font-semibold">
        {{info.role}}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>