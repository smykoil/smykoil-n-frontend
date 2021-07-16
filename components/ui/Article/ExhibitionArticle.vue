<template>
  <div class="flex gap-9 flex-wrap md:flex-nowrap">
    <div class="w-full md:w-8/12">
      <h1 class="font-bold font-serif text-3xl mb-4">{{ article.title }}</h1>

      <light-box
        :items="article.post.files"
        :index="index"
        @close="index = null"
      />

      <div class="grid gap-2 grid-cols-4 mb-2">
        <img v-for="(image, imgIndex) in article.post.files.slice(0,12)"
             :key="imgIndex + 'img'"
             @click="index = imgIndex"
             class="cursor-pointer"
             :class="{
               'hidden sm:block': imgIndex >= 4 && imgIndex < 6,
               'hidden lg:block': imgIndex >= 6 && imgIndex < 8,
               'hidden xl:block': imgIndex >= 8,
             }"
             :src="image.url" alt="img">
      </div>

      <div>
        {{ article.post.description }}
      </div>
      <comments-list>
        <comment>
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
    <article-info :created-at="article.created_at"
                  :info="[`${article.post.files.length} изображений`]"
                  :category="category"
                  class="flex-grow" />
  </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

import ArticleInfo from "./ArticleInfo";
import CommentsList from "../Comments/CommentsList";
import Comment from "../Comments/Comment";
import LightBox from "../LightBox/LightBox";
export default {
  name: "ExhibitionArticle",
  props: {
    article: { type: Object, required: true }
  },
  data: () => ({
    category: {
      link: '/category/1',
      title: 'Игртека'
    },
    index: null
  }),
  computed: {
    imageBlockClasses() {
      switch (this.items.length) {
        case 1:
          return 'grid-cols-1'
        case 2:
          return 'grid-cols-1 md:grid-cols-2'
        case 3:
          return 'grid-cols-1 md:grid-cols-3'
        default:
          return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
      }
    },
    imageClasses() {
      switch (this.items.length) {
        case 1:
          return 'h-96 md:py-72 lg:py-96'
        case 2:
          return 'h-72'
        default:
          return 'h-48'
      }
    }
  },
  components: {LightBox, Comment, CommentsList, ArticleInfo, CoolLightBox},
}
</script>

<style scoped>
.columns-container {
  column-width: 140px;
  column-gap: 0.5rem;
}
</style>
