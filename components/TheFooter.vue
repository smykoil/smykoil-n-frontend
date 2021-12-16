<template>
  <footer :class="$style.TheFooter">
    <app-container>
      <div class="py-4 flex flex-wrap lg:flex-nowrap gap-12">
        <TheFooterNav class="w-full lg:w-1/6" title="Nataly">
          <TheFooterNavItem
            v-for="(item, i) of nav"
            :key="i + 'fn'" to="#"
          >{{ item }}</TheFooterNavItem>
        </TheFooterNav>

        <ArticleList without-grid class="w-full lg:w-3/6" title="Популярное">
          <ArticleListItem
            dark
            hide-category
            class="mb-6"
            v-for="article in articles"
            :article="article"
            :key="article.id"
          />
        </ArticleList>

        <TheFooterDeveloperBlock class="w-full lg:w-2/6 text-sm" />
      </div>

      <TheFooterEmailBlock email="lybow75@ya.ru" />
    </app-container>
  </footer>
</template>

<script>
import AppContainer from '~/components/AppContainer'
import TheFooterEmailBlock from "./TheFooterEmailBlock";
import TheFooterNav from "./TheFooterNav";
import TheFooterNavItem from "./TheFooterNavItem";
import ArticleList from "./ArticleList";
import ArticleListItem from "./ArticleListItem";
import TheFooterDeveloperBlock from "./TheFooterDeveloperBlock";
import {mapGetters} from "vuex";

export default {
  name: "TheFooter",
  data: () => ({
    nav: [
      'Главная',
      'Вопросы и предложения',
      'Обо мне',
      'Портфолио',
      'Контакты'
    ],
  }),
  computed: {
    ...mapGetters({
      articles: 'articles/popular', // TODO: Add category(id,title) to API
    })
  },
  components: {
    TheFooterDeveloperBlock,
    ArticleListItem,
    ArticleList,
    TheFooterNavItem,
    TheFooterNav,
    TheFooterEmailBlock,
    AppContainer
  }
}
</script>

<style module>
.TheFooter {
  @apply px-4 mb-16 lg:mb-0 bg-gray-800 overflow-hidden mt-12 pt-12 text-white;
}
</style>
