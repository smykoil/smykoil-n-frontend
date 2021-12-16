<template>
  <div class="first-screen lg:min-h-screen flex text-white pt-24 lg:pb-6 overflow-hidden">
    <slot />

    <AppContainer class="flex flex-col items-center lg:items-start lg:flex-row gap-6 lg:px-4" self-padding>
      <div class="h-36 lg:h-auto flex justify-center overflow-hidden items-center rounded-full lg:rounded-none lg:w-1/3">
        <img class="w-36 lg:w-full lg:rounded-3xl z-10" src="~static/images/author.jpg" alt="Nataly">
      </div>
      <div class="bg-white lg:bg-transparent lg:w-2/3 flex flex-col items-start -mt-24 lg:mt-0 pt-16 lg:pt-0">
        <div class="lg:backdrop lg:backdrop-filter lg:backdrop-blur-xl px-4 py-8 lg:p-12 lg:rounded-3xl shadow mb-4">
          <h1 class="font-serif text-center lg:text-left font-bold text-black lg:text-white text-4xl mb-4">Здравствуйте,</h1>

          <p class="mb-4 text-black lg:text-gray-300">Я Смыкова Наталия, учитель-дефектолог, родилась 15 июля1975г. Закончила Высоковскую среднюю школу в 1992г. В этом же году поступила в Торжокское педагогическое училище. Закончила - в 1994г, получив диплом «Учитель начальных классов». В 1994г. Принята в Высоковскую среднюю школу в качестве учителя русского языка и литературы. В 2017г принята в МБДОУ №27 в качестве воспитателя. В 2018г принята вГКОУ Вышневолоцкая школа интернат №1, где и работаю в натоящее время.</p>

          <p class="text-black lg:text-gray-300">Здесь будут собраны материалы по развитию зрительного восприятия, ориентировки в пространстве, социально-бытовой ориентировки, развитию тактильной чувствительности и мелкой моторики, полезные ссылки и многое другое. Материалы представлены как и из открытых источников с указанием автора.</p>
        </div>
        <div class="flex text-black lg:text-white px-4 justify-between w-full">
          <span>&copy; Смыкова Н. А. 2021</span>
          <span>lybow75@ya.ru</span>
        </div>
      </div>
    </AppContainer>
  </div>
</template>

<script>
import AppContainer from "./AppContainer";
export default {
  name: "HomeFirstScreen",
  components: {AppContainer}
}
</script>
