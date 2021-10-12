<template>
  <div>
    <h1 v-if="title !== ''" class="font-bold font-serif text-3xl mb-4">{{ title }}</h1>
    <div :class="{'grid grid-cols-1 md:grid-cols-2 gap-6': !withoutGrid}">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleList",
  props: {
    title: { type: String, default: "" },
    withoutGrid: { type: Boolean, default: false}
  }
}
</script>

<style scoped>

</style>
