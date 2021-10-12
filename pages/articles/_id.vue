<template>
  <office-article
    v-if="article.post.type === 'document'"
    :article="article"
    :src="article.post.file_src"
  />
  <office-article
    v-else-if="article.post.type === 'presentation'"
    :article="article"
    src="https://smykova-n.ru/storage/pp.pptx"
  />
  <simple-article
    v-else-if="article.post.type === 'post'"
    :article="article"/>
  <exhibition-article
    v-else-if="article.post.type === 'exhibition'"
    :article="article"
  />
</template>

<script>
import AppLayout from "../../components/layouts/AppLayout";
import OfficeArticle from "../../components/ui/Article/OfficeArticle";
import SimpleArticle from "../../components/ui/Article/SimpleArticle";
import ExhibitionArticle from "../../components/ui/Article/ExhibitionArticle";

export default {
  name: "ArticleShow",
  async asyncData({store, params}) {
    await store.dispatch('articles/fetchCurrent', params.id)
    await store.dispatch('comments/fetchList', {
      model_type: 'article',
      model_id: params.id
    })
  },
  computed: {
    article() {
      return this.$store.getters['articles/current']
    }
  },
  components: {ExhibitionArticle, SimpleArticle, OfficeArticle, AppLayout}
}
</script>

<style scoped>

</style>
