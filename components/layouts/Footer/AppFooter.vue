<template>
  <footer>
    <app-container class="px-4">
      <slot />
    </app-container>
  </footer>
</template>

<script>
import AppContainer from '~/components/layouts/Container/AppContainer'

export default {
  name: "AppFooter",
  components: {
    AppContainer
  }
}
</script>

<style scoped>

</style>
