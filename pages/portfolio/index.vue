<script setup lang="ts">
import { DESIGN, SMM } from '~/projects'

useHead({
  title: 'Portfolio',
})
</script>

<template>
  <h1 class="font-bold text-3xl my-6 text-[#007fef]">
    Портфолио
  </h1>

  <div class="grid grid-cols-2 max-md:grid-cols-1 gap-6">
    <Card
      v-for="project in DESIGN" :key="project.title" :title="project.title" :link="project.link"
      :description="project.description" :thumbnail="project.thumbnail"
    />
  </div>

  <div class="mt-6 grid grid-cols-3 max-md:grid-cols-1 gap-6">
    <SMMCard v-for="project in SMM" :key="project.thumbnail" :title="project.title" :link="project.link" :thumbnail="project.thumbnail" />
  </div>

  <ToTop />
</template>
