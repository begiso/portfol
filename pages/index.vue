<script setup lang="ts">
import { DESIGN } from '~/projects'
</script>

<template>
  <div>
    <div class="my-56 max-md:mt-16 max-md:mb-28 max-w-[46rem]">
      <p class="text-5xl max-md:text-2xl font-medium leading-[1.2]">
        Привет, меня зовут Бегис. <span class="text-[#007fef]">Занимаюсь UX/UI дизайном и веб-разработкой.</span>
      </p>

      <p class="mt-4 mb-12 max-md:mt-3 text-2xl max-md:text-lg text-[#8d8d8d]">
        Работаю в этой сфере более 3-х лет, работал в маркетинговом агентстве и веб-студии. 
      </p>

      <NuxtLink to="/about" class="rounded-2xl py-5 px-10 text-white bg-black hover:bg-[#007fef]">
        Обо мне 🚀
      </NuxtLink>
    </div>

    <h2 class="font-bold max-md:mt-16 text-3xl max-md:text-xl my-6 text-[#007fef]">
      Мои некоторые работы
    </h2>

    <div class="grid grid-cols-2 max-md:grid-cols-1 gap-6 items-center justify-center">
      <Card
        v-for="project in DESIGN" :key="project.title" :title="project.title" :link="project.link"
        :description="project.description" :thumbnail="project.thumbnail"
      />
    </div>

    <div class="mt-4 text-lg arrow-right-icon-wrapper">
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
          был графическим дизайнером, а теперь я – гордый UX/UI дизайнер)
        </p>
        <p class="mt-2 text-lg">
          Люблю творить, изучать новое и развиваться. Я также увлечен программированием, особенно веб-разработкой. Имею опыт в создании веб-проектов и всегда готов расширять свои навыки.
        </p>

        <div class="mt-4 max-md:my-2 text-lg">
          <NuxtLink to="/about" class="pl-4 max-md:pl-0 text-[#a4a4a4] arrow-right-icon-wrapper">
            Читать полностью
            <ArrowRightIcon class="inline-block w-5 h-5" />
          </NuxtLink>
        </div>
      </div>

      <img class="object-cover" src="/images/begis.png" alt="Me">
    </div>

    <ToTop />
  </div>
</template>
