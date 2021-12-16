<template>
  <div>
    <HomeFirstScreen>
      <TheHeaderNavbar :dark="dark" class="fixed top-0 w-full">
        <TheHeaderLogo :dark="dark" />

        <TheHeaderNav :dark="dark">
          <TheHeaderNavItem v-for="(item, i) of headerNav"
                        :to="item.to" :key="i + 'hn'">{{ item.title }}</TheHeaderNavItem>
        </TheHeaderNav>

        <TheHeaderNav :dark="dark">
          <template v-if="!$auth.loggedIn">
            <TheHeaderNavItem to="/login">Вход</TheHeaderNavItem>
            <TheHeaderNavItem to="/register">Регистрация</TheHeaderNavItem>
          </template>
          <template v-if="$auth.loggedIn">
            <TheHeaderNavItem to="/profile">{{ $auth.user.first_name }}</TheHeaderNavItem>
          </template>
        </TheHeaderNav>
      </TheHeaderNavbar>

      <div class="absolute top-0 my-4 w-full">
        <AppContainer class="lg:hidden flex justify-between items-center">
          <TheHeaderLogo dark />
        </AppContainer>
      </div>

      <TheHeaderMobileNavbar />
    </HomeFirstScreen>

    <AppContainer class="pt-4">
      <Nuxt />
    </AppContainer>

    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "/components/TheHeader";
import TheHeaderNavbar from "/components/TheHeaderNavbar";
import TheHeaderLogo from "/components/TheHeaderLogo";
import TheHeaderNav from "/components/TheHeaderNav";
import TheHeaderNavItem from "/components/TheHeaderNavItem";
import AppContainer from "/components/AppContainer";
import TheFooter from "/components/TheFooter";
import TheFooterDeveloperBlock from "/components/TheFooterDeveloperBlock";
import TheFooterNav from "/components/TheFooterNav";
import TheFooterNavItem from "/components/TheFooterNavItem";
import TheFooterEmailBlock from "/components/TheFooterEmailBlock";
import ArticleList from "/components/ArticleList";
import ArticleListItem from "/components/ArticleListItem";
import TheHeaderMobileNavbar from "/components/TheHeaderMobileNavbar";
import HomeFirstScreen from "../components/HomeFirstScreen";

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
    }
  },
  methods: {
    onScroll() {
      this.scrollPosition = window.scrollY
    }
  },
  computed: {
    dark() {
      return this.scrollPosition < 20
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.onScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.onScroll)
  },
  components: {
    HomeFirstScreen,
    TheHeaderMobileNavbar,
    TheFooterEmailBlock,
    TheFooterDeveloperBlock,
    ArticleListItem,
    ArticleList,
    TheFooterNavItem,
    TheFooterNav,
    TheFooter,
    AppContainer,
    TheHeaderNavItem,
    TheHeaderNav,
    TheHeaderLogo,
    TheHeaderNavbar,
    TheHeader
  }
}
</script>

<style scoped>
.first-screen {
  background: url('~static/images/home-bg.jpg') fixed top center;
  background-size: cover;
}
</style>
