<script setup lang="ts">
defineProps<{
  isOpen: boolean
}>()

defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <div class="relative z-50">
    <!-- Backdrop -->
    <div :class="{ 'navbar-backdrop': isOpen }" @click="$emit('close')" />
    <!-- NAV -->
    <nav class="fixed h-screen side-nav flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto" :class="{ open: isOpen }">
      <div class="flex items-center mb-8">
        <NuxtLink to="/" class="mr-auto text-3xl font-bold leading-none" @click="$emit('close')">
          <h1>Begis</h1>
        </NuxtLink>
        <button name="Close" aria-label="Close Menu" @click="$emit('close')">
          <XIcon />
        </button>
      </div>
      <div>
        <ul @click="$emit('close')">
          <li class="mb-1">
            <NuxtLink
              to="/portfolio"
              class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
              :class="{ 'navbar-link-active': ['portfolio', 'portfolio-slug'].includes($route.name as string) }"
            >
              Портфолио
            </NuxtLink>
          </li>
          <li class="mb-1">
            <NuxtLink
              to="/about"
              class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
              :class="{ 'navbar-link-active': $route.path === '/about' }"
            >
              Обо мне
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/contact"
              class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
              :class="{ 'navbar-link-active': $route.path === '/contact' }"
            >
              Контакты
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="mt-auto">
        <p class="my-4 text-xs text-center text-gray-400">
          <span>Begis Orınbaev © {{ new Date().getFullYear() }}</span>
        </p>
      </div>
    </nav>
  </div>
</template>

<style lang="postcss">
.side-nav {
  transform: translateX(-100%);
  transition: transform 0.5s ease-in-out;
}

.side-nav.open {
  transform: translateX(0);
}

.navbar-backdrop {
  @apply fixed inset-0 bg-gray-800 opacity-25 transition-all duration-300;
}

.navbar-link-active {
  @apply bg-blue-50 text-blue-600;
}
</style>
