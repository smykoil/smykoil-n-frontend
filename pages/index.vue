<template>
  <article-list class="mt-4" title="Последние публикации">
    <article-preview
      v-for="(article, i) of articles.list"
      :key="i + 'article-preview'"
      :article="article"
      hide-category
    />
  </article-list>
</template>

<script>
import AppLayout from "../components/layouts/AppLayout";
import ArticleList from "../components/ui/Article/ArticleList";
import ArticlePreview from "../components/ui/Article/ArticlePreview";
import HomeLayout from "../components/layouts/HomeLayout";

export default {
  layout: 'home-layout',
  async fetch({store}) {
    await store.dispatch('articles/fetchList', {per_page: 4})
  },
  computed: {
    articles() {
      return this.$store.getters['articles/list']
    }
  },
  components: {HomeLayout, ArticlePreview, ArticleList, AppLayout}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&display=swap');

.bg-author {
  background-image: url('~static/images/author.jpg');
  background-size: cover;
  background-position: center center;
}
</style>
