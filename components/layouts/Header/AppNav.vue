<template>
  <ul class="flex gap-3" :class="{'text-white': dark}">
    <slot />
  </ul>
</template>

<script>
export default {
  name: "AppNav",
  props: {
    dark: { type: Boolean, default: false }
  }
}
</script>

<style scoped>

</style>
