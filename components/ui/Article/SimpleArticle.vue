<template>
  <div class="flex gap-9 flex-wrap md:flex-nowrap">
    <div class="w-full md:w-8/12">
      <h1 class="font-bold font-serif text-3xl">Статья #{{ $route.params.id }}</h1>
      <div class="mb-4">
        {{ article.post.content }}
      </div>
      <comments-list>
        <comment>
          <comment />
          <comment />
          <comment />
        </comment>
        <comment>
          <comment />
          <comment />
          <comment />
        </comment>
      </comments-list>
    </div>
    <article-info :created-at="created_at" :category="category" class="flex-grow" />
  </div>
</template>

<script>
import ArticleInfo from "./ArticleInfo";
import CommentsList from "../Comments/CommentsList";
export default {
  name: "SimpleArticle",
  data: () => ({
    title: 'Документ какой-то',
    created_at: '21 января 2021',
    category: {
      link: '/category/1',
      title: 'Игртека'
    }
  }),
  components: {CommentsList, ArticleInfo},
  props: {
    article: { type: Object, required: true }
  }
}
</script>

<style scoped>

</style>
