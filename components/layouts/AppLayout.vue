<template>
  <div>
    <app-header />

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
      <slot />
    </app-container>

    <app-footer class="bg-gray-800 overflow-hidden mt-12 pt-12 text-white">
      <div class="py-4 flex flex-wrap lg:flex-nowrap gap-12">
        <footer-nav class="w-full lg:w-1/6" title="Nataly">
          <footer-nav-item v-for="(item, i) of footerNav"
                           :key="i + 'fn'" to="#">{{ item }}</footer-nav-item>
        </footer-nav>

        <small-categorizable-list class="w-full lg:w-3/6" title="Популярное">
<!--          <small-categorizable dark class="mb-6" v-for="i in 2" :key="i + 'sctz'" />-->
        </small-categorizable-list>

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
import SmallCategorizable from "../ui/Categorizable/SmallCategorizable";
import AppLink from "../ui/Link/AppLink";
import SmallCategorizableList from "../ui/Categorizable/SmallCategorizableList";
import DeveloperBlock from "./Footer/DeveloperBlock";
import FooterNav from "./Footer/FooterNav";
import FooterNavItem from "./Footer/FooterNavItem";
import EmailBlock from "./Footer/EmailBlock";
export default {
  name: "AppLayout",
  data: () => ({
    headerNav: [
      { to: '/', title: 'Главная' },
      { to: '/categories/1', title: 'Игротека' },
      { to: '/categories/2', title: 'Полезные статьи' },
      { to: '/categories/3', title: 'Конспекты занятий' },
      { to: '/categories/4', title: 'Портфолио' },
    ],
    footerNav: ['Главная', 'Вопросы и предложения', 'Обо мне', 'Портфолио', 'Контакты']
  }),
  components: {
    EmailBlock,
    FooterNavItem,
    FooterNav,
    DeveloperBlock,
    SmallCategorizableList,
    AppLink, SmallCategorizable, AppFooter, AppContainer, AppNavItem, AppNav, AppLogo, AppNavbar, AppHeader}
}
</script>

<style scoped>

</style>
