<template>
  <transition name="pg" mode="out-in">
    <article-list v-if="articles.list && category.title" :title="category.title">
      <article-preview
        v-for="(article, i) of articles.list"
        :category="category"
        :key="i + 'ctz'"
        :article="article"
        hide-category
      />
    </article-list>
    <div class="py-20 flex items-center justify-center" v-else>
      <img src="~static/images/loading.svg" alt="Loading...">
    </div>
  </transition>
</template>

<script>
import ArticlePreview from "../../components/ArticleListItem";
import ArticleList from "../../components/ArticleList";

export default {
  name: "CategoryShow",
  async fetch({store, params}) {
    await store.dispatch('category/fetchItem', params.id)
    await store.dispatch('articles/fetchList', {category_id: params.id})
  },
  computed: {
    category() {
      return this.$store.getters['category/item']
    },
    articles() {
      return this.$store.getters['articles/list']
    },
  },
  components: {ArticleList, ArticlePreview}
}
</script>
