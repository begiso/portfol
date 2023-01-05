<script setup lang="ts">
const el = document.getElementById('__nuxt')

const scrollToTop = () => {
  el?.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div class="w-full flex items-center justify-center pt-24 pb-12 cursor-pointer" @click="scrollToTop">
    <svg width="2em" height="2em" viewBox="0 0 24 24">
      <path
        fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M12 5v14m4-10l-4-4M8 9l4-4"
      />
    </svg>

    <span class="text-lg font-medium">Вверх</span>
  </div>
</template>
