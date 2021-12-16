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
        <template v-if="!$auth.loggedIn">
          <app-nav-item to="/login">Вход</app-nav-item>
          <app-nav-item to="/register">Регистрация</app-nav-item>
        </template>
        <template v-if="$auth.loggedIn">
          <app-nav-item to="/profile">{{ $auth.user.first_name }}</app-nav-item>
          <app-nav-item @click.prevent="$auth.logout()">Выход</app-nav-item>
        </template>
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
import AppHeader from "/components/TheHeader";
import AppNavbar from "/components/TheHeaderNavbar";
import AppLogo from "/components/TheHeaderLogo";
import AppNav from "/components/TheHeaderNav";
import AppNavItem from "/components/TheHeaderNavItem";
import AppContainer from "/components/AppContainer";
import AppFooter from "/components/TheFooter";
import AppLink from "/components/AppLink";
import DeveloperBlock from "/components/TheFooterDeveloperBlock";
import FooterNav from "/components/TheFooterNav";
import FooterNavItem from "/components/TheFooterNavItem";
import EmailBlock from "/components/TheFooterEmailBlock";
import ArticleList from "/components/ArticleList";
import ArticlePreview from "/components/ArticleListItem";
import MobileNavbar from "/components/TheHeaderMobileNavbar";
export default {
  name: "DefaultLayout",
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
