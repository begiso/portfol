<template>
  <footer class="bg-black text-white max-md:text-sm w-full p-6 flex max-md:flex-col items-center justify-center">
    <div class="max-w-6xl w-full flex justify-between items-center">
      <div>
        <span class="block mb-3 text-xl max-md:hidden">Begis Orınbaev © {{ new Date().getFullYear() }}</span>

        <ul class="flex max-md:flex-col gap-4">
          <li>
            <a href="https://t.me/begys" target="_blank" rel="noopener noreferrer">
              Telegram
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/begis" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/begis.orinbaev" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
        </ul>
      </div>

      <nav>
        <ul class="flex max-md:flex-col gap-4">
          <li>
            <NuxtLink to="/portfolio">
              Портфолио
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">
              Обо мне
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact">
              Контакты
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>
