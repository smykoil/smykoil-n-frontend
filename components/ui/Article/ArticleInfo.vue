<template>
  <div>
    <div class="mb-8">
      <h1 class="font-serif font-bold text-3xl mb-3">Информация</h1>
      <div>
        <div class="last:mb-2">
          <app-link :to="category.link">{{ category.title }}</app-link> - {{ createdAt }}
        </div>
        <div class="mb-2" v-if="info">
          <p v-for="(item, i) of info" :key="i + 'info_item'">{{ item }}</p>
        </div>
      </div>
      <app-button
        to="/category/1"
        color="green"
        :icon="['fa', 'file-download']">Скачать</app-button>
    </div>
    <div v-if="applications.length !== 0" class="mb-4">
      <h1 class="font-serif font-bold text-3xl mb-3">Приложение</h1>
      <application class="mb-2">
        <application-item v-for="(app, i) of applications"
                          :key="i + 'application'"
                          class="mb-3"
                          :link="app.file_src"
                          :download-link="app.file_src"
                          :format="app.extension">
          {{ app.title }}
        </application-item>
      </application>
    </div>
  </div>
</template>

<script>
import AppLink from "../Link/AppLink";
import AppButton from "../Button/AppButton";
import Application from "./Application";
import ApplicationItem from "./ApplicationItem";
export default {
  name: "ArticleInfo",
  props: {
    category: { type: Object, required: true },
    createdAt: { type: String, required: true },
    info: { type: Array, default: null },
    applications: { type: Array, default: null }
  },
  components: {ApplicationItem, Application, AppButton, AppLink}
}
</script>

<style scoped>

</style>
