<script setup lang="ts">
useHead({
  titleTemplate: titleChunk => titleChunk ? `${titleChunk} | Begis` : 'Begis Orınbaev',
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
html, body {
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
</style>
