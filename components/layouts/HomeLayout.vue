<template>
  <div>
    <div class="first-screen min-h-screen flex text-white pt-24 overflow-hidden">
      <app-navbar :dark="dark" class="fixed top-0 w-full">
        <app-logo :dark="dark" />

        <app-nav :dark="dark">
          <app-nav-item v-for="(item, i) of headerNav"
                        :to="item.to" :key="i + 'hn'">{{ item.title }}</app-nav-item>
        </app-nav>

        <app-nav :dark="dark">
          <app-nav-item to="/">Вход</app-nav-item>
          <app-nav-item to="/">Регистрация</app-nav-item>
        </app-nav>
      </app-navbar>

      <div class="absolute top-0 my-4 w-full">
        <app-container class="md:hidden mx-auto">
          <app-logo dark />
        </app-container>
      </div>

      <mobile-navbar />

      <app-container class="flex flex-col items-center md:items-start md:flex-row gap-6 md:gap-24 py-4">
        <div class="h-36 md:h-auto flex justify-center overflow-hidden items-center rounded-full md:rounded-none md:w-1/3">
          <img class="w-36 md:w-full md:rounded-3xl" src="~static/images/author.jpg" alt="Nataly">
        </div>
        <div class="md:w-2/3 flex flex-col items-start">
          <div class="backdrop backdrop-filter backdrop-blur-xl px-4 py-8 md:p-12 rounded-3xl shadow-md mb-4">
            <h1 class="font-serif font-bold text-4xl mb-4">Здравствуйте,</h1>

            <p class="mb-4 text-gray-300">Я Смыкова Наталия, учитель-дефектолог, родилась 15 июля1975г. Закончила Высоковскую среднюю школу в 1992г. В этом же году поступила в Торжокское педагогическое училище. Закончила - в 1994г, получив диплом «Учитель начальных классов». В 1994г. Принята в Высоковскую среднюю школу в качестве учителя русского языка и литературы. В 2017г принята в МБДОУ №27 в качестве воспитателя. В 2018г принята вГКОУ Вышневолоцкая школа интернат №1, где и работаю в натоящее время.</p>

            <p class="text-gray-300">Здесь будут собраны материалы по развитию зрительного восприятия, ориентировки в пространстве, социально-бытовой ориентировки, развитию тактильной чувствительности и мелкой моторики, полезные ссылки и многое другое. Материалы представлены как и из открытых источников с указанием автора.</p>
          </div>
          <div class="flex justify-between w-full">
            <span>&copy; Смыкова Н. А. 2021</span>
            <span>lybow75@ya.ru</span>
          </div>
        </div>
      </app-container>
    </div>

    <app-container class="pt-4">
      <slot />
    </app-container>

    <app-footer class="bg-gray-800 overflow-hidden mt-12 pt-12 text-white">
      <div class="py-4 flex flex-wrap lg:flex-nowrap gap-12">
        <footer-nav class="w-full lg:w-1/6" title="Nataly">
          <footer-nav-item v-for="(item, i) of footerNav"
                           :key="i + 'fn'" to="#">{{ item }}</footer-nav-item>
        </footer-nav>

        <article-list without-grid class="w-full lg:w-3/6" title="Популярное">
          <article-preview
            dark
            hide-category
            class="mb-6"
            v-for="(article, i) in articles"
            :article="article"
            :key="i + 'sctz'"
          />
        </article-list>

        <developer-block class="w-full lg:w-2/6 text-sm" />
      </div>

      <email-block email="lybow75@ya.ru" />
    </app-footer>
  </div>
</template>

<script>
import AppHeader from "./Header/AppHeader";
import AppNavbar from "./Header/AppNavbar";
import AppLogo from "./Header/AppLogo";
import AppNav from "./Header/AppNav";
import AppNavItem from "./Header/AppNavItem";
import AppContainer from "./Container/AppContainer";
import AppFooter from "./Footer/AppFooter";
import FooterNav from "./Footer/FooterNav";
import FooterNavItem from "./Footer/FooterNavItem";
import ArticleList from "../ui/Article/ArticleList";
import ArticlePreview from "../ui/Article/ArticlePreview";
import DeveloperBlock from "./Footer/DeveloperBlock";
import EmailBlock from "./Footer/EmailBlock";
import MobileNavbar from "./MobileNavbar";
export default {
  name: "HomeLayout",
  data() {
    return {
      scrollPosition: 0,
      headerNav: [
        { to: '/categories/1', title: 'Игротека' },
        { to: '/categories/2', title: 'Полезные статьи' },
        { to: '/categories/3', title: 'Конспекты занятий' },
        { to: '/categories/4', title: 'Портфолио' },
      ],
      footerNav: ['Главная', 'Вопросы и предложения', 'Обо мне', 'Портфолио', 'Контакты'],
    }
  },
  methods: {
    onScroll() {
      this.scrollPosition = window.scrollY
    }
  },
  computed: {
    articles() {
      return this.$store.getters['articles/popular']  // TODO: Add category(id,title) to API
    },
    dark() {
      return this.scrollPosition < 20
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.onScroll);
  },
  components: {
    MobileNavbar,
    EmailBlock,
    DeveloperBlock,
    ArticlePreview,
    ArticleList,
    FooterNavItem, FooterNav, AppFooter, AppContainer, AppNavItem, AppNav, AppLogo, AppNavbar, AppHeader}
}
</script>

<style scoped>
.first-screen {
  background: url('~static/images/home-bg.jpg') fixed top center;
  background-size: cover;
}
</style>
