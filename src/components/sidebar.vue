<script setup>

import Photo from "./photo.vue";

const props = defineProps(['info']);
</script>

<template>
  <div class="flex flex-col gap-6 w-full p-3">
    <photo :info="info"></photo>

    <div class="border-b-4 border-dotted w-full mx-auto"></div>

    <div class="flex flex-col gap-3 px-5">
      <div class="flex justify-between" v-for="sideBaeInfo in info.sideBarData">
        <div class="text font-bold text-text-1 dark:text-text-dark-1">
          {{ sideBaeInfo.title }}
        </div>
        <div class="text font-bold text-text-1/70 dark:text-text-dark-1/80">
          {{sideBaeInfo.value}}
        </div>
      </div>
    </div>

    <div class="border-b-4 border-dotted w-full mx-auto"></div>

    <div class="flex gap-1.5 justify-center items-center w-full px-3">
      <a :href="socialMedia.link" class="rounded-full w-full max-w-12 bg-background-5 dark:bg-background-dark-3 p-2 flex justify-center items-center
          aspect-square relative hover:scale-105 transition-all duration-300 ease-in-out group"
          v-for="socialMedia in info.socialMedias">
        <img :src="socialMedia.icon" :alt="socialMedia.title" class="w-[70%] text-text-1 group-hover:scale-110 not-dark:filter not-dark:brightness-30" />
<!--        <div class="absolute top-0 left-0 w-full h-full bg-black dark:bg-background-dark-3/10 rounded-full mix-blend-overlay z-20 duration-300"></div>-->
      </a>
    </div>

    <div class="flex flex-col gap-5 justify-center items-center w-full bg-background-4 dark:bg-background-dark-3 rounded-2xl mx-auto p-5 text-sm">
      <div class="flex  gap-3 justify-between w-full mx-auto">
        <div class="w-full flex wrap-break-word min-w-fit flex-wrap sm:flex-nowrap">
          {{info.phoneNumber.title}} :
        </div>
        <div class="w-full" style="direction: ltr;">
          {{info.phoneNumber.value}}
        </div>
      </div>

        <div class="flex flex-wrap gap-3 justify-between items-center w-full mx-auto">
          <div>
            {{info.emailAddress.title}} :
          </div>
          <div class="wrap-anywhere">
            {{info.emailAddress.value}}
          </div>
        </div>
    </div>

  </div>
</template>

<style scoped>

</style>