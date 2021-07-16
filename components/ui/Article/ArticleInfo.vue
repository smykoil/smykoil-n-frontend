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
    <div class="mb-4">
      <h1 class="font-serif font-bold text-3xl mb-3">Приложение</h1>
      <application class="mb-2">
        <application-item class="mb-3" format="pdf">Документ #1.pdf</application-item>
        <application-item class="mb-3" format="pptx">Документ #2.ppt</application-item>
        <application-item class="mb-3" format="doc">Документ #3.doc</application-item>
        <application-item class="mb-3" format="png">Документ #4.png</application-item>
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
    info: { type: Array, default: null }
  },
  components: {ApplicationItem, Application, AppButton, AppLink}
}
</script>

<style scoped>

</style>
