<script setup lang="ts">
defineProps<{
  title: string
  description: string
  link: string
  thumbnail: string
}>()
</script>

<template>
  <NuxtLink :to="link" class="block rounded-md border border-solid border-[#dadada] arrow-right-icon-wrapper">
    <div class="flex items-center justify-between">
      <div class="left pt-3 pl-5">
        <span class="text-xl  font-medium">{{ title }}</span>
        <h2 class="py-2 font-light text-xl">
          {{ description }}
        </h2>
      </div>

      <div class="right text-5xl pr-5">
        <ArrowRightIcon />
      </div>
    </div>

    <div class="card-zoom rounded-b-md">
      <img class="card-zoom-image" :src="`/images/${thumbnail}`" :alt="title">
    </div>
  </NuxtLink>
</template>

<style lang="postcss">
.card-zoom {
  @apply relative overflow-hidden bg-no-repeat bg-cover;
}

.card-zoom-image {
  @apply hover:scale-110 hover:cursor-pointer w-full transition duration-300 ease-in-out;
}
</style>
