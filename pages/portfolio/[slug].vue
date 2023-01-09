<script setup lang="ts">
import { DESIGN, SMM } from '~/projects'

const route = useRoute()

const projectName = typeof route.params.slug === 'string' ? route.params.slug : route.params.slug.join(' ')

const design = DESIGN.find(project => project.link === route.path)
const smmProject = SMM.find(project => project.link === route.path)
const project = design || smmProject
const isSMM = smmProject !== undefined

useHead({
  title: project?.title || capitalizeFirstLetter(projectName),
})

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
</script>

<template>
  <h1 class="text-center font-bold text-2xl mt-4 mb-6">
    {{ project?.title || smmProject?.title }}
  </h1>

  <p v-show="typeof project?.description === 'string'" class="text-center font-medium text-lg text-[#3e3e3e]">
    {{ project?.description || smmProject?.description }}
  </p>

  <div class="mt-4  max-md:grid-cols-1" :class="{ 'grid': isSMM, 'grid-cols-3': isSMM, 'gap-6': isSMM }">
    <img v-for="image in project?.images || smmProject?.images" :key="image.src" class="w-full" :src="image.src" :alt="image.alt">
  </div>

  <ToTop />
</template>
