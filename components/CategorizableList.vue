<template>
  <div class="flex flex-col items-center">
    <h1 v-if="title" class="w-full xl:w-11/12 font-serif font-bold text-4xl mb-4">{{ title }}</h1>
    <div class="w-full xl:w-11/12 grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-16 flex-wrap">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "CategorizableList",
  props: {
    title: { type: String }
  }
}
</script>
