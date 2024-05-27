<script setup lang="ts">
useHead({
  title: 'About',
})
</script>

<template>
  <div>
    <h1 class="text-3xl text-[#007fef] font-bold mt-4 mb-8">
      Обо мне
    </h1>

    <div class="text-xl max-md:text-lg">
      <img class="float-left max-md:w-full pr-4 pb-2" src="/images/me.png" alt="Me">
      <h2 class="text-3xl max-md:text-2xl max-md:text-center font-bold">
        Всем привет.
      </h2>
      <p class="mt-2 leading-8">
        Меня зовут Бегис. Работаю в этой сфере более 3-х лет, работал в маркетинговом агентстве и веб-студии. Ранее я был
        графическим дизайнером, а теперь я – гордый UX/UI дизайнер)
      </p>
      <p class="mt-2 leading-8">
                  Люблю творить, изучать новое и развиваться. Я также увлечен программированием, особенно веб-разработкой. Имею опыт в создании веб-проектов и всегда готов расширять свои навыки.
      </p>
      <p class="mt-4 mb-8"><a href="/Begis_resume.pdf" target="_blank" rel="noopener noreferrer" class="text-[#007fef] decoration-1 font-medium">Мое резюме</a></p>
      <p class="mt-4 leading-8">
        <strong>Мои сильные стороны: </strong>легко адаптируюсь, всегда нахожу компромисс в решении задач, могу объединить
        вокруг себя людей.
      </p>
      <p class="mt-4 leading-8">
        <strong>Мои слабые стороны: </strong>Иногда я поддаюсь перфекционизму, стремясь к идеалу и проводя долгие эксперименты в поисках лучшего варианта. Для меня важно, чтобы все было идеально. Открыто признаю свой недостаток и активно работаю над собой, чтобы балансировать свой перфекционизм.
      </p>
      
      <p class="mt-10">
        <strong>Некоторые проекты, в которых я участвовал:</strong>

        <ul class="mt-4 pl-8 list-none leading-8">
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
            <NuxtLink to="/portfolio/newsmart" class="text-[#007fef] font-medium">
              Newsmart
            </NuxtLink> - Интернет-магазин аксессуаров для телефонов и электроники. Дизайн сайта
          </li>
          <li>
            <NuxtLink to="/portfolio/shipaker" class="text-[#007fef] font-medium">
              Shipaker
            </NuxtLink> - Новостной сайт для медицинского журнала "Shipaker". Дизайн сайта
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

      <p class="mt-10">
        <strong>Я в социальных сетях: </strong>
        <a href="https://t.me/begys" target="_blank" rel="noopener noreferrer" class="text-[#007fef] font-medium">Telegram</a>,
        <a href="https://www.linkedin.com/in/begis" target="_blank" rel="noopener noreferrer" class="text-[#007fef] font-medium">LinkedIn</a>,
        <a href="https://www.instagram.com/begis.orinbaev" target="_blank" rel="noopener noreferrer" class="text-[#007fef] font-medium">Instagram</a>,
        <a href="https://www.behance.net/begis" target="_blank" rel="noopener noreferrer" class="text-[#007fef] font-medium">Behance</a>
      </p>
    </div>

    <ToTop class="hidden max-md:flex" />
  </div>
</template>
