<template>
  <article class="flex gap-4">
    <div class="w-24 flex-shrink-0">
      <NLink :to="`/articles/${article.id}`" class="block overflow-hidden rounded-2xl">
        <img :src="article.preview" :alt="article.title">
      </NLink>
    </div>
    <div class="min-w-0">
      <div class="flex flex-col">
        <AppLink v-if="!hideCategory"
                  :dark="dark" class="uppercase text-sm mb-2 leading-3"
                  :to="`/categories/${article.category.id || ''}`">
          {{ article.category.title || ''}}
        </AppLink>
        <NLink :to="`/articles/${article.id}`">
          <h1 class="font-bold whitespace-nowrap truncate mb-1">{{ article.title }}</h1>
          <p class="text-sm mb-2"> {{ article.excerpt }}</p>
        </NLink>
        <div class="text-sm text-gray-400 flex gap-4" :class="dark ? 'text-gray-400' : 'text-gray-600'">
          <span><FaIcon class="mr-1" :icon="['fa', 'calendar-week']" /> {{ article.created_at }}</span>
          <span v-if="false"><FaIcon class="mr-1" :icon="['fa', 'comment']" /> {{ comments_count }}</span>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import AppLink from "./AppLink";
export default {
  name: "ArticleListItem",
  components: {AppLink},
  props: {
    article: { type: Object, required: true },
    hideCategory: { type: Boolean, default: false },
    dark: { type: Boolean, default: false },
  }
}
</script>
