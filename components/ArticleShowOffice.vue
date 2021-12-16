<template>
  <div class="flex gap-9 flex-wrap md:flex-nowrap">
    <div class="w-full flex-shrink-0 md:w-8/12">
      <h1 class="font-serif font-bold text-3xl mb-4">{{ title }}</h1>
      <div class="mb-4">
        <iframe :src='`https://view.officeapps.live.com/op/embed.aspx?src=${article.post.file_src}`'
                class="w-full" style="height: 500px"></iframe>
      </div>
      <div class="mb-4">
        <markdown :markdown="article.post.description" />
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
      class="flex-grow"
    />
  </div>
</template>

<script>
import AppLink from "./AppLink";
import AppButton from "./AppButton";
import ApplicationItem from "./ArticleShowApplicationItem";
import CommentsList from "./CommentsList";
import Comment from "./CommentsListItem";
import Application from "./ArticleShowApplication";
import ArticleInfo from "./ArticleShowArticleInfo";
import Markdown from "./AppMarkdown";
export default {
  name: "ArticleShowOffice",
  data: () => ({
    title: 'Документ какой-то',
    created_at: '21 января 2021',
    description: 'Много текста текста текста текста текста текста текста текста текста текста текста текста текста ' +
      'текста текста текста текста текста текста текста текста текста текста текста текста текста текста текста ' +
      'текста текста текста текста текста текста текста текста текста текста текста текста текста текста текста ' +
      'текста текста текста текста текста текста текста текста текста текста текста текста текста текста текста ' +
      'текста текста текста текста текста текста текста текста текста текста текста текста текста текста текста ' +
      'текста текста текста текста текста текста текста текста текста текста текста текста текста текста текста ' +
      'текста текста текста текста текста текста текста.',
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
  components: {Markdown, ArticleInfo, Application, Comment, CommentsList, ApplicationItem, AppButton, AppLink},
  props: {
    article: { type: Object, required: true }
  }
}
</script>
