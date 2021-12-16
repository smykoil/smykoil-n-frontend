<template>
  <li class="mb-2"><app-link dark :to="to"><slot /></app-link></li>
</template>

<script>
import AppLink from "./AppLink";
export default {
  name: "TheFooterNavItem",
  props: {
    to: { type: String, default: '#' }
  },
  components: {AppLink}
}
</script>
