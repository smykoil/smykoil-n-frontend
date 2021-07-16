<template>
  <li class="mb-2"><app-link dark :to="to"><slot /></app-link></li>
</template>

<script>
import AppLink from "../../ui/Link/AppLink";
export default {
  name: "FooterNavItem",
  props: {
    to: { type: String, default: '#' }
  },
  components: {AppLink}
}
</script>

<style scoped>

</style>
