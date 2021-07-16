<template>
  <div class="flex gap-9 flex-wrap md:flex-nowrap">
    <div class="w-full flex-shrink-0 md:w-8/12">
      <h1 class="font-serif font-bold text-3xl mb-4">{{ title }}</h1>
      <div class="mb-4">
        <iframe :src='`https://view.officeapps.live.com/op/embed.aspx?src=${src}`'
                class="w-full" style="height: 500px"></iframe>
      </div>
      <div class="mb-4">
        {{ description }}
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
        </comment>
      </comments-list>
    </div>
    <article-info :created-at="created_at" :category="category" class="flex-grow" />
  </div>
</template>

<script>
import AppLink from "../Link/AppLink";
import AppButton from "../Button/AppButton";
import ApplicationItem from "./ApplicationItem";
import CommentsList from "../Comments/CommentsList";
import Comment from "../Comments/Comment";
import Application from "./Application";
import ArticleInfo from "./ArticleInfo";
export default {
  name: "OfficeArticle",
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
  components: {ArticleInfo, Application, Comment, CommentsList, ApplicationItem, AppButton, AppLink},
  props: {
    src: { type: String, required: true },
  }
}
</script>

<style scoped>

</style>
