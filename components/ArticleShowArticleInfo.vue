<template>
  <div>
    <div class="mb-8">
      <h1 class="font-serif font-bold text-3xl mb-3">Информация</h1>
      <div>
        <div class="last:mb-2">
          <AppLink :to="category.link">{{ category.title }}</AppLink> - {{ createdAt }}
        </div>
        <div class="mb-2" v-if="info">
          <p v-for="(item, i) of info" :key="i + 'info_item'">{{ item }}</p>
        </div>
      </div>
      <AppButton
        to="/category/1"
        color="green"
        icon="file-download">Скачать</AppButton>
    </div>
    <div v-if="applications.length !== 0" class="mb-4">
      <h1 class="font-serif font-bold text-3xl mb-3">Приложение</h1>
      <Application class="mb-2">
        <application-item v-for="(app, i) of applications"
                          :key="i + 'application'"
                          class="mb-3"
                          :link="app.file_src"
                          :download-link="app.file_src"
                          :format="app.extension">
          {{ app.title }}
        </application-item>
      </Application>
    </div>
  </div>
</template>

<script>
import AppLink from "./AppLink";
import AppButton from "./AppButton";
import Application from "./ArticleShowApplication";
import ApplicationItem from "./ArticleShowApplicationItem";
export default {
  name: "ArticleShowArticleInfo",
  props: {
    category: { type: Object, required: true },
    createdAt: { type: String, required: true },
    info: { type: Array, default: null },
    applications: { type: Array, default: null }
  },
  components: {ApplicationItem, Application, AppButton, AppLink}
}
</script>
