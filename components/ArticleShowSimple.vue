<template>
  <div class="flex gap-9 flex-wrap md:flex-nowrap">
    <div class="w-full md:w-8/12">
      <h1 class="font-bold font-serif text-3xl">Статья #{{ $route.params.id }}</h1>

      <div class="mb-4">
        <markdown :markdown="article.post.content" />
      </div>

      <comments-list>
        <comment v-for="(item, iParent) of comments"
                 :comment="item"
                 :key="iParent + '-comment-parent'">
          <comment v-for="(child, iChild) of item.children"
                   :comment="child"
                   :key="iChild + '-comment-child'"/>
        </comment>
      </comments-list>
    </div>
    <article-info
      :created-at="created_at"
      :category="category"
      :applications="article.applications"
      class="flex-grow" />
  </div>
</template>

<script>
import ArticleInfo from "./ArticleShowArticleInfo";
import CommentsList from "./CommentsList";
import Markdown from "./AppMarkdown";
import Comment from "./CommentsListItem";
export default {
  name: "ArticleShowSimple",
  data: () => ({
    title: 'Документ какой-то',
    created_at: '21 января 2021',
    category: {
      link: '/category/1',
      title: 'Игртека'
    }
  }),
  computed: {
    comments() {
      return this.$store.getters['comments/list']
    }
  },
  components: {Comment, Markdown, CommentsList, ArticleInfo},
  props: {
    article: { type: Object, required: true }
  }
}
</script>
