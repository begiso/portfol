<script setup lang="ts">
import { DESIGN } from '~/projects'
</script>

<template>
  <div class="my-60 max-md:my-10 max-w-2xl">
    <p class="text-5xl max-md:text-2xl font-medium">
      Привет, меня зовут Бегис. <span class="text-[#007fef]">Занимаюсь графическом и UX/UI дизайном</span>
    </p>

    <p class="my-10 max-md:my-5 text-2xl max-md:text-lg text-[#8d8d8d]">
      Работаю в этой сфере более 3-х лет, работал в маркетинговом агентстве и веб-студии. <br> Есть опыт в
      веб-разработке
    </p>

    <NuxtLink to="/about" class="rounded-2xl py-2.5 px-5 text-white bg-black hover:bg-[#007fef]">
      Обо мне ↗️
    </NuxtLink>
  </div>

  <h2 class="font-bold max-md:mt-16 text-3xl max-md:text-xl my-6 text-[#007fef]">
    Избранные работы
  </h2>

  <div class="grid grid-cols-2 max-md:grid-cols-1 gap-6 items-center justify-center">
    <Card
      v-for="project in DESIGN" :key="project.title" :title="project.title" :link="project.link"
      :description="project.description" :thumbnail="project.thumbnail"
    />
  </div>

  <div class="mt-4 text-lg">
    <NuxtLink to="/portfolio" class="pl-4 max-md:pl-0 text-[#a4a4a4]">
      Все работы
      <ArrowRightIcon class="inline-block w-5 h-5" />
    </NuxtLink>
  </div>

  <div class="flex max-md:flex-col items-center justify-between">
    <div class="max-w-xl max-md:mt-12">
      <h2 class="font-bold text-2xl max-md:text-lg mb-4">
        Обо мне
      </h2>
      <p class="text-lg">
        Меня зовут Бегис. Работаю в этой сфере более 3-х лет, работал в маркетинговом агентстве и веб-студии. Ранее я
        был графическим дизайнером, а теперь я – гордый UX/UI дизайнер.
      </p>
      <p class="mt-2 text-lg">
        Люблю творить, изучать новое и развиваться) Кроме графического дизайна, мне также интересно программирование.
        Есть немного опыт в веб разработке)
      </p>

      <div class="mt-4 max-md:my-2 text-lg">
        <NuxtLink to="/about" class="pl-4 max-md:pl-0 text-[#a4a4a4]">
          Читать полностью
          <ArrowRightIcon class="inline-block w-5 h-5" />
        </NuxtLink>
      </div>
    </div>

    <NuxtImg class="object-cover" src="/images/begis.png" alt="Me" />
  </div>

  <ToTop />
</template>
