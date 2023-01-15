<script setup lang="ts">
const el = ref<HTMLElement>()
const isHovered = useElementHover(el)
const isMenuOpen = ref(false)

const addActiveClass = (el: { target: HTMLElement }) => {
  el.target.classList.add('active')
}

const removeActiveClass = (el: { target: HTMLElement }) => {
  el.target.classList.remove('active')
}
</script>

<template>
  <header class="py-4 flex items-center justify-between">
    <NuxtLink ref="el" to="/">
      <span class="block font-bold text-2xl tracking-tighter w-32">{{ isHovered ? 'Orınbaev' : 'Begis' }}</span>
    </NuxtLink>

    <nav class="max-md:hidden">
      <ul class="flex items-center justify-between w-96">
        <li>
          <NuxtLink
            class="relative underline-effect" :class="{ active: $route.name === 'portfolio-slug' }"
            to="/portfolio" @mouseenter="addActiveClass" @mouseleave="removeActiveClass"
          >
            Портфолио
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="relative underline-effect" to="/about" @mouseenter="addActiveClass"
            @mouseleave="removeActiveClass"
          >
            Обо мне
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="relative underline-effect" to="/contact" @mouseenter="addActiveClass"
            @mouseleave="removeActiveClass"
          >
            Контакты
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <a class="max-md:hidden" href="mailto:begisorynbaev@gmail.com">
      <span class="sr-only">Email</span>
      <span>begisorynbaev@gmail.com</span>
    </a>

    <button
      name="Drawer Menu"
      aria-label="Open Menu" @click="isMenuOpen = !isMenuOpen"
    >
      <BurgerMenuIcon class="md:hidden w-7 h-7 hover:cursor-pointer" />
    </button>

    <Teleport to="body">
      <Drawer :is-open="isMenuOpen" @close="isMenuOpen = false" />
    </Teleport>
  </header>
</template>

<style>
.underline-effect::after {
  content: "";
  width: 100%;
  height: 1px;
  position: absolute;
  background-color: #007fef;
  bottom: -2px;
  opacity: 0;
  left: -100%;
  transition: .4s;
}

.underline-effect.router-link-active,
.underline-effect.active {
  color: #007fef;
}

.underline-effect.router-link-active::after,
.underline-effect.active::after {
  left: -1px;
  opacity: 1;
}
</style>
