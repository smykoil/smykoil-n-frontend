<template>
  <header class="z-20 transition-all duration-150 hidden lg:block"
          :class="dark ? 'text-white' : 'text-black bg-white shadow-lg'"
  >
    <app-container
        class="flex items-center gap-8 justify-between transition-all duration-150"
        :class="dark ? 'h-24' : 'h-16'"
    >
      <slot />
    </app-container>
  </header>
</template>

<script>
import AppContainer from "./AppContainer";
export default {
  name: "TheHeaderNavbar",
  props: {
    dark: {type: Boolean, default: false }
  },
  components: {AppContainer},
}
</script>

<style scoped>
.shadow-header {
  box-shadow: 0 0 0 1.5rem #f7f7f73a;
}
</style>
