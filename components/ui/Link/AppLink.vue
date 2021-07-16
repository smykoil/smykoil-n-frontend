<template>
  <nuxt-link v-if="!blank && !button"
             :class="dark ? darkClasses : lightClasses"
             active-class="text-blue-800"
             :to="to || '#'"><slot /></nuxt-link>
  <button v-else-if="button"
          @click="$emit('click')"
          :class="dark ? darkClasses : lightClasses"
          :to="to || '#'"><slot /></button>
  <a v-else
     target="_blank"
     :class="dark ? darkClasses : lightClasses"
     :href="to"><slot /></a>
</template>

<script>
export default {
  name: "AppLink",
  data: () => ({
    darkClasses: 'text-blue-500 focus:text-blue-600 hover:text-blue-400',
    lightClasses: 'text-blue-600 focus:text-blue-800 hover:text-blue-400',
  }),
  props: {
    dark: { type: Boolean, default: false },
    blank: { type: Boolean, default: false },
    button: { type: Boolean, default: false },
    to: { type: String, default: null },
  }
}
</script>

<style scoped>

</style>
