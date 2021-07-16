<template>
  <app-layout>
<!--    <categorizable-list class="mt-4" :title="`Категория ${$route.params.id}`">
      <categorizable v-for="i of 18" :key="i + 'ctz'" />
    </categorizable-list>-->

    <small-categorizable-list :title="category.title">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <small-categorizable
          v-for="(article, i) of articles.list"
          :category="category"
          :key="i + 'ctz'"
          :article="article"
        />
      </div>
    </small-categorizable-list>
  </app-layout>
</template>

<script>
import AppLayout from "../../components/layouts/AppLayout";
import CategorizableList from "../../components/ui/Categorizable/CategorizableList";
import Categorizable from "../../components/ui/Categorizable/Categorizable";
import SmallCategorizableList from "../../components/ui/Categorizable/SmallCategorizableList";
import SmallCategorizable from "../../components/ui/Categorizable/SmallCategorizable";
export default {
  name: "CategoryShow",
  async asyncData({store, params}) {
    await store.dispatch('category/fetchItem', params.id)
    await store.dispatch('articles/fetchList', params.id)
  },
  computed: {
    category() {
      return this.$store.getters['category/item']
    },
    articles() {
      return this.$store.getters['articles/list']
    },
  },
  components: {SmallCategorizable, SmallCategorizableList, Categorizable, CategorizableList, AppLayout}
}
</script>

<style scoped>

</style>
