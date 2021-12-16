<template>
  <NLink v-if="!blank && !button"
             :class="dark ? darkClasses : lightClasses"
             active-class="text-green-800"
             :to="to || '#'"><slot /></NLink>
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
    darkClasses: 'text-green-500 focus:text-green-600 hover:text-green-400',
    lightClasses: 'text-green-600 focus:text-green-800 hover:text-green-500',
  }),
  props: {
    dark: { type: Boolean, default: false },
    blank: { type: Boolean, default: false },
    button: { type: Boolean, default: false },
    to: { type: String, default: null },
  }
}
</script>
