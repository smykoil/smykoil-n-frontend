<template>
  <div class="flex gap-9 flex-wrap md:flex-nowrap">
    <div class="w-full md:w-8/12">
      <h1 class="font-bold font-serif text-3xl mb-4">{{ article.title }}</h1>

      <light-box
        :items="article.post.files"
        :index="index"
        @close="index = null"
      />

      <div class="ExhibitionList overflow-x-scroll whitespace-nowrap px-4 -mx-4 w-screen md:w-full mb-6">
          <img
            :key="imgIndex + 'img'"
            class="cursor-pointer rounded-md inline-block w-2/3 mr-2 last:mr-4"
            :src="image.thumb_url" alt="img"
            @click="index = imgIndex"
            v-for="(image, imgIndex) in article.post.files.slice(0,12)"
            style="scroll-snap-align: center"
          >
      </div>

      <markdown :markdown="article.post.description"/>

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
    <article-info :created-at="article.created_at"
                  :info="[`${article.post.files.length} изображений`]"
                  :category="category"
                  :applications="article.applications"
                  class="flex-grow"/>
  </div>
</template>

<script>
import ArticleInfo from "./ArticleShowArticleInfo";
import CommentsList from "./CommentsList";
import Comment from "./CommentsListItem";
import LightBox from "./AppLightBox";
import Markdown from "./AppMarkdown";

export default {
  name: "ArticleShowExhibition",
  props: {
    article: {type: Object, required: true}
  },
  data: () => ({
    category: {
      link: '/category/1',
      title: 'Игртека'
    },
    index: null,
  }),
  computed: {
    comments() {
      return this.$store.getters['comments/list']
    }
  },
  components: {
    Markdown,
    LightBox, Comment, CommentsList, ArticleInfo,
  },
}
</script>

<style>
.ExhibitionList {
  scroll-snap-type: x mandatory;
  scroll-padding: 1rem;
}
</style>
