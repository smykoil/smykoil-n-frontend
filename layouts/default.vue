<template>
  <div>
    <app-header />

    <mobile-navbar />

    <app-navbar class="sticky top-0">
      <app-logo />

      <app-nav>
        <app-nav-item v-for="(item, i) of headerNav"
                      :to="item.to" :key="i + 'hn'">{{ item.title }}</app-nav-item>
      </app-nav>

      <app-nav class="ml-auto">
        <app-nav-item to="/">Вход</app-nav-item>
        <app-nav-item to="/">Регистрация</app-nav-item>
      </app-nav>
    </app-navbar>

    <app-container class="pt-4">
      <nuxt />
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
import AppHeader from "/components/layouts/Header/AppHeader";
import AppNavbar from "/components/layouts/Header/AppNavbar";
import AppLogo from "/components/layouts/Header/AppLogo";
import AppNav from "/components/layouts/Header/AppNav";
import AppNavItem from "/components/layouts/Header/AppNavItem";
import AppContainer from "/components/layouts/Container/AppContainer";
import AppFooter from "/components/layouts/Footer/AppFooter";
import AppLink from "/components/ui/Link/AppLink";
import DeveloperBlock from "/components/layouts/Footer/DeveloperBlock";
import FooterNav from "/components/layouts/Footer/FooterNav";
import FooterNavItem from "/components/layouts/Footer/FooterNavItem";
import EmailBlock from "/components/layouts/Footer/EmailBlock";
import ArticleList from "/components/ui/Article/ArticleList";
import ArticlePreview from "/components/ui/Article/ArticlePreview";
import MobileNavbar from "/components/layouts/MobileNavbar";
export default {
  name: "AppLayout",
  data: () => ({
    headerNav: [
      { to: '/categories/1', title: 'Игротека' },
      { to: '/categories/2', title: 'Полезные статьи' },
      { to: '/categories/3', title: 'Конспекты занятий' },
      { to: '/categories/4', title: 'Портфолио' },
    ],
    footerNav: ['Главная', 'Вопросы и предложения', 'Обо мне', 'Портфолио', 'Контакты']
  }),
  computed: {
    articles() {
      return this.$store.getters['articles/popular']  // TODO: Add category(id,title) to API
    }
  },
  components: {
    MobileNavbar,
    ArticlePreview,
    ArticleList,
    EmailBlock,
    FooterNavItem,
    FooterNav,
    DeveloperBlock,
    AppLink, AppFooter, AppContainer, AppNavItem,
    AppNav, AppLogo, AppNavbar, AppHeader
  }
}
</script>

<style>
.pg-enter-active,
.pg-leave-active {
  transition: opacity 0.5s;
}
.pg-enter,
.pg-leave-to {
  opacity: 0;
}

</style>
