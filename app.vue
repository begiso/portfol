<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'ru',
  },
  titleTemplate: titleChunk => titleChunk ? `${titleChunk} | Begis` : 'Begis Orınbaev',
  meta: [
    { name: 'keywords', content: 'Begis, Orinbaev, portfolio, UI, UX, UI/UX, developer' },
    { name: 'description', content: 'Begis Orınbaev\'s portfolio' },
  ],
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/nuxt.png',
    },
  ],
})
</script>

<template>
  <TheHeader class="max-w-6xl max-h-16 mx-auto w-full px-6 xl:mt-4" />

  <main class="relative max-w-6xl mx-auto w-full px-6">
    <NuxtPage />
  </main>

  <TheFooter class="xl:mt-24" />
</template>

<style lang="postcss">
html,
body {
  height: 100%;
}

#__nuxt {
  height: 100%;
  overflow-x: hidden;
  display: grid;
  grid-template-areas: "header" "main" "footer";
}

header {
  grid-area: header;
}

main {
  grid-area: main;
}

footer {
  grid-area: footer;
}

.link {
  @apply border-b hover:text-green-400 hover:border-green-400;
}

/* Page Transition */
.page-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.page-enter-active {
  transition: all 0.3s ease-out;
}

.page-leave-active {
  transition: all 0.3s ease-in;
}

.page-enter-to,
.page-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
