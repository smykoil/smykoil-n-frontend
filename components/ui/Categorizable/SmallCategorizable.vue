<template>
  <article class="flex gap-4">
    <div class="w-24 flex-shrink-0">
      <nuxt-link :to="`/articles/${article.id}`" class="block bg-white overflow-hidden rounded-2xl">
        <img src="~static/images/photo-not-found-dark-sm.png" :alt="article.title">
      </nuxt-link>
    </div>
    <div class="min-w-0">
      <div class="flex flex-col">
        <app-link v-if="category || article.category"
                  :dark="dark" class="uppercase text-sm mb-2 leading-3"
                  :to="`/categories/${category.id || article.category.id}`">
          {{  category.title || article.category.title }}
        </app-link>
        <nuxt-link :to="`/articles/${article.id}`">
          <h1 class="font-bold whitespace-nowrap truncate mb-1">{{ article.title }}</h1>
          <p class="text-sm mb-2"> {{ article.excerpt }}</p>
        </nuxt-link>
        <div class="text-sm text-gray-400 flex gap-4" :class="dark ? 'text-gray-400' : 'text-gray-600'">
          <span><fa class="mr-1" :icon="['fa', 'calendar-week']" /> {{ article.created_at }}</span>
          <span v-if="false"><fa class="mr-1" :icon="['fa', 'comment']" /> {{ comments_count }}</span>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import AppLink from "../Link/AppLink";
export default {
  name: "SmallCategorizable",
  components: {AppLink},
  props: {
    article: { type: Object, required: true },
    category: { type: Object },
    dark: { type: Boolean, default: false },
  }
}
</script>

<style scoped>

</style>
