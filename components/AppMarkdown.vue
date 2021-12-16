<template>
  <div class="prose mb-6 max-w-full" v-html="template"></div>
</template>

<script>
import Markdown from "@nuxt/markdown";

export default {
  name: "AppMarkdown",
  props: {
    markdown: { type: String, required: true }
  },
  data() {
    return {
      template: null
    }
  },
  created() {
    const md = new Markdown({ toc: false, sanitize: false })
    md.toMarkup(this.markdown).then((t) => {
      this.template = t.html
    })
  },
}
</script>

<style>
.prose h1,
.prose h2,
.prose h3,
.prose h4,
.prose h5,
.prose h6 {
  @apply font-bold font-serif mb-3
}

.prose p {
  @apply mt-0
}
</style>
