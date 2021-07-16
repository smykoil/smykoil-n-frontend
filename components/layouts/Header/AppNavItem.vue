<template>
  <li>
    <nuxt-link :to="to" :exact="exact">
      <slot />
    </nuxt-link>
  </li>
</template>

<script>
export default {
  name: "AppNavItem",
  props: {
    to: { type: String, required: true },
    exact: { type: Boolean, default: false }
  }
}
</script>

<style scoped>

</style>
