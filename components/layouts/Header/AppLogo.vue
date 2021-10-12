<template>
  <nuxt-link
    to="/" class="flex items-center transition-all duration-150"
    :class="dark ? 'gap-4' : 'gap-2'">
    <img
      class="transition-all duration-150"
      :src="dark ? logo.dark : logo.light"
      :class="dark ? 'w-12' : 'w-8'"
      alt="Nataly">
    <div class="flex flex-col">
      <span class="text-3xl font-serif font-bold" :class="{'-mt-1': dark}">Nataly</span>
      <transition
        enter-active-class="transition-all duration-150 overflow-hidden"
        leave-active-class="transition-all duration-150 overflow-hidden"
        enter-class="h-0 w-0"
        enter-to-class="h-4 w-45"
        leave-class="h-4 w-45"
        leave-to-class="h-0 w-0"
      >
        <span v-if="dark" class="uppercase text-xs">Блог учителя дефектолога</span>
      </transition>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "AppLogo",
  data: () => ({
    logo: {
      dark: require('~/static/images/s-sm-transparent-logo-light.png'),
      light: require('~/static/images/s-sm-logo.png'),
    }
  }),
  props: {
    dark: { type: Boolean, default: false }
  }
}
</script>

<style scoped>

</style>
