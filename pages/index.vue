<template>
  <app-layout>
    <div class="flex flex-col md:flex-row gap-4 mb-8">
      <div class="flex-shrink-0 w-48 h-48 rounded-full mx-auto mb-4 lg:h-auto lg:w-1/3 lg:rounded-none bg-author"></div>
      <div class="flex-1 w-auto lg:w-2/3 lg:px-4 lg:py-24">
        <h1 class="text-4xl font-semibold mb-4 font-serif">Здравствуйте,</h1>
        <p class="mb-2 font-sans">
          Я Смыкова Наталия, учитель-дефектолог, родилась 15 июля1975г. Закончила Высоковскую среднюю школу в 1992г. В этом же году поступила в Торжокское педагогическое училище. Закончила - в 1994г, получив диплом «Учитель начальных классов». В 1994г. Принята в Высоковскую среднюю школу в качестве учителя русского языка и литературы. В 2017г принята в МБДОУ №27 в качестве воспитателя. В 2018г принята вГКОУ Вышневолоцкая школа интернат №1, где и работаю в натоящее время.
        </p>
        <p class="font-sans">
          Здесь будут собраны материалы по развитию зрительного восприятия, ориентировки в пространстве, социально-бытовой ориентировки, развитию тактильной чувствительности и мелкой моторики, полезные ссылки и многое другое. Материалы представлены как и из открытых источников с указанием автора.
        </p>
      </div>
    </div>
    <categorizable-list title="Последние статьи">
      <categorizable v-for="i of 3" :key="i + 'ctz'" />
    </categorizable-list>
  </app-layout>
</template>

<script>
import AppLayout from "../components/layouts/AppLayout";
import CategorizableList from "../components/ui/Categorizable/CategorizableList";
import Categorizable from "../components/ui/Categorizable/Categorizable";

export default {
  components: {Categorizable, CategorizableList, AppLayout}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&display=swap');

.bg-author {
  background-image: url('https://smykova-n.ru/images/main_user.jpg');
  background-size: cover;
  background-position: center center;
}
</style>
