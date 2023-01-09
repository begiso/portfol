<script setup lang="ts">
useHead({
  title: 'About',
})
</script>

<template>
  <h1 class="text-3xl text-[#007fef] font-bold mt-4 mb-8">
    Обо мне
  </h1>

  <div class="text-xl max-md:text-lg">
    <img class="float-left max-md:w-full pr-4 pb-2" src="/images/me.png" alt="Me">

    <h2 class="text-3xl max-md:text-2xl max-md:text-center font-bold">
      Всем привет.
    </h2>
    <p class="mt-2">
      Меня зовут Бегис. Работаю в этой сфере более 3-х лет, работал в маркетинговом агентстве и веб-студии. Ранее я был
      графическим дизайнером, а теперь я – гордый UX/UI дизайнер.
    </p>
    <p>
      Люблю творить, изучать новое и развиваться) Кроме графического дизайна, мне также интересно программирование.
      Есть немного опыт в веб разработке)
    </p>
    <p class="mt-2">
      <strong>Мои сильные стороны: </strong>легко адаптируюсь, всегда нахожу компромисс в решении задач, могу объединить
      вокруг себя людей.
    </p>
    <p class="mt-2">
      <strong>Мои слабые стороны: </strong>я иногда бываю перфекционистом. Пока не получу идеальный вариант или решение,
      долго экспериментирую в ущерб времени. В моем мире все должно быть идеально. Я честно признаю свой недостаток и
      работаю над собой, чтобы немного угомонить свой перфекционизм. Есть немного опыт в веб разработке
    </p>
    <p class="mt-2">
      <strong>Некоторые проекты, в которых я участвовал:</strong>

      <ul class="pl-8 list-disc">
        <li>
          <NuxtLink to="/portfolio/ami" class="text-[#007fef] font-medium">
            Ami
          </NuxtLink> - Компания "Ментальный фитнес". Дизайн
          мобильного
          приложения
        </li>
        <li>
          <NuxtLink to="/portfolio/audiobook" class="text-[#007fef] font-medium">
            KAA Audiobook
          </NuxtLink> - Аудиокнига каракалпакской
          литературы(Социальный проект). Дизайн мобильного
          приложения
        </li>
        <li>
          <NuxtLink to="/portfolio/datanimate" class="text-[#007fef] font-medium">
            Datanimate
          </NuxtLink> - Автоматизация анализа данных и
          моделирования. Дизайн сайта
        </li>
        <li>
          <NuxtLink to="/portfolio/bizler" class="text-[#007fef] font-medium">
            Bizler Group
          </NuxtLink> - Разработка веб-сайтов и мобильных
          приложений. Дизайн сайта
        </li>
        <li>
          <NuxtLink to="/portfolio/greentea" class="text-[#007fef] font-medium">
            Зеленый чай
          </NuxtLink> - Санитарно-гигиенические средства.
          SMM
          Дизайн
        </li>
        <li>
          <NuxtLink to="/portfolio/steady" class="text-[#007fef] font-medium">
            Steady Learning Center
          </NuxtLink> - Образовательный центр
          английского языка. SMM Дизайн
        </li>
        <li>
          <NuxtLink to="/portfolio/greendrugs" class="text-[#007fef] font-medium">
            Зеленая аптека
          </NuxtLink> - Аптека. SMM дизайн
        </li>
      </ul>
    </p>

    <p class="mt-2">
      <strong>Я в социальных сетях: </strong>
      <a href="https://t.me/begys" target="_blank" rel="noopener noreferrer" class="text-[#007fef] font-medium">Telegram</a>,
      <a href="https://www.linkedin.com/in/begis" target="_blank" rel="noopener noreferrer" class="text-[#007fef] font-medium">LinkedIn</a>,
      <a href="https://www.instagram.com/begis.orinbaev" target="_blank" rel="noopener noreferrer" class="text-[#007fef] font-medium">Instagram</a>,
      <a href="https://www.behance.net/begis" target="_blank" rel="noopener noreferrer" class="text-[#007fef] font-medium">Behance</a>
    </p>
  </div>

  <ToTop class="hidden max-md:flex" />
</template>
