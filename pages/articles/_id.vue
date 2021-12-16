<template>
  <div
    :is="componentName"
    :article="article"
  ></div>
</template>

<script>
import ArticleShowOffice from "../../components/ArticleShowOffice";
import ArticleShowSimple from "../../components/ArticleShowSimple";
import ArticleShowExhibition from "../../components/ArticleShowExhibition";
import {mapGetters} from "vuex";

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
    ...mapGetters({ article: 'articles/current' }),
    componentName: function () {
      let articleComponents = {
        'document': 'ArticleShowOffice',
        'presentation': 'ArticleShowOffice',
        'post': 'ArticleShowSimple',
        'exhibition': 'ArticleShowExhibition'
      }

      return articleComponents[this.article.post.type]
    }
  },
  components: {ArticleShowOffice, ArticleShowSimple, ArticleShowExhibition}
}
</script>
