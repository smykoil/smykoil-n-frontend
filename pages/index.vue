<template>
  <article-list class="mt-4" title="Последние публикации">
    <article-preview
      v-for="article of articles.list"
      :key="article.id"
      :article="article"
      hide-category
    />
  </article-list>
</template>

<script>
import ArticleList from "../components/ArticleList";
import ArticlePreview from "../components/ArticleListItem";
import {mapGetters} from "vuex";

export default {
  layout: 'home',
  async fetch({store}) {
    await store.dispatch('articles/fetchList', {per_page: 4})
  },
  computed: {
    ...mapGetters({
      articles: 'articles/list'
    })
  },
  components: {ArticlePreview, ArticleList}
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
