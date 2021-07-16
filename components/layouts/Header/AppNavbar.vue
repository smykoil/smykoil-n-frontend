<template>
  <header>
    <app-container class="flex shadow-header items-center gap-8 -mt-6 bg-white p-4">
      <slot />
    </app-container>
  </header>
</template>

<script>
import AppContainer from "../Container/AppContainer";
export default {
  name: "AppNavbar",
  components: {AppContainer},
}
</script>

<style scoped>
.shadow-header {
  box-shadow: 0 0 0 1.5rem #f7f7f73a;
}
</style>
