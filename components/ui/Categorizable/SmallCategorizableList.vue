<template>
  <div>
    <h1 v-if="title !== ''" class="font-bold font-serif text-3xl mb-4">{{ title }}</h1>
    <slot />
  </div>
</template>

<script>
export default {
  name: "SmallCategorizableList",
  props: {
    title: {type: String, default: ""}
  }
}
</script>

<style scoped>

</style>
