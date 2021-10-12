<template>
  <button v-if="!to"
          class="focus:ring-4 focus:ring-opacity-30 flex justify-center items-center"
          @click="$emit('click')"
          :class="`${colors[color] || colors['blue']} ${sizes[size] || sizes['md']} ${roundedNone ? '' : 'rounded-2xl'}`">
    <fa :class="iconClasses" v-if="icon !== null" :icon="icon" /><slot />
  </button>

  <nuxt-link v-else-if="!blank"
             class="focus:ring-4 focus:ring-opacity-30 justify-center items-center"
             :class="`${colors[color] || colors['blue']} ${sizes[size] || sizes['md']} ${roundedNone ? '' : 'rounded-2xl'} ${noFlex ? '' : 'inline-flex'}`"
             :to="to">
    <fa :class="iconClasses" v-if="icon !== null" :icon="icon" /><slot />
  </nuxt-link>

  <a v-else :href="to"
     target="_blank"
     class="focus:ring-4 focus:ring-opacity-30 justify-center items-center"
     :class="`${colors[color] || colors['blue']} ${sizes[size] || sizes['md']} ${roundedNone ? '' : 'rounded-2xl'} ${noFlex ? '' : 'inline-flex'}`">
    <fa :class="iconClasses" v-if="icon !== null" :icon="icon" /><slot />
  </a>
</template>

<script>
export default {
  name: "AppButton",
  data: () => ({
    iconClasses: 'mr-2',
    colors: {
      self: ' ',
      blue: 'bg-blue-600 text-white hover:bg-blue-500 focus:bg-blue-700 focus:ring-blue-700',
      gray: 'bg-gray-300 text-gray-800 hover:bg-gray-200 focus:bg-gray-400 focus:ring-gray-300',
      green: 'bg-green-600 text-white hover:bg-green-500 focus:bg-green-700 focus:ring-green-700',
      red: 'bg-red-600 text-white hover:bg-red-500 focus:bg-red-700 focus:ring-red-700',
    },
    sizes: {
      self: ' ',
      sm: 'px-4 py-1 text-sm',
      md: 'w-auto px-8 py-2',
      lg: 'px-8 py-3 text-lg',
    },
  }),
  props: {
    color: { type: String, default: 'green' },
    size: { type: String, default: 'md' },
    to: { type: String, default: null },
    icon: { type: Array, default: null },
    roundedNone: { type: Boolean, default: false },
    noFlex: { type: Boolean, default: false },
    blank: { type: Boolean, default: false }
  }
}
</script>

<style scoped>

</style>
