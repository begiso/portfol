<script setup lang="ts">
defineProps<{
  title: string
  link: string
  thumbnail: string
}>()
</script>

<template>
  <NuxtLink :to="link" class="block rounded-md border border-solid border-[#dadada]">
    <div class="card-zoom rounded-md">
      <NuxtImg class="card-zoom-image" :src="`/images/${thumbnail}`" :alt="title" />

      <p class="text-xl p-3 flex justify-between items-center">
        <span>{{ title }}</span>

        <span class="tracking-tighter text-right text-base font-medium">SMM design</span>
      </p>
    </div>
  </NuxtLink>
</template>
