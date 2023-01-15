<script setup lang="ts">
useHead({
  title: 'Contact',
})
</script>

<template>
  <div>
    <h1 class="text-3xl text-[#007fef] font-bold mt-4 mb-8">
      Контакты
    </h1>

    <div class="flex max-md:flex-col max-md:items-start items-end mt-24 max-md:mt-12">
      <div>
        <p class="mb-4">
          E-mail: <a href="mailto:begisorynbaev@gmail.com" class="block font-medium text-2xl max-md:text-lg">begisorynbaev@gmail.com</a>
        </p>
        <p class="mb-4">
          Telegram: <a href="https://t.me/begys" class="block font-medium text-2xl max-md:text-lg">@begys</a>
        </p>
        <p>Телефон: <a href="tel:+998913042528" class="block font-medium text-2xl max-md:text-lg">+998913042528</a></p>
      </div>

      <ul class="text-xl ml-32 max-md:ml-0 max-md:mt-10">
        <li><a href="https://www.behance.net/begis" target="_blank" rel="noopener noreferrer">Behance</a></li>
        <li><a href="https://www.instagram.com/begis.orinbaev" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li><a href="https://fb.com/begys" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://www.linkedin.com/in/begis" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      </ul>
    </div>
  </div>
</template>
