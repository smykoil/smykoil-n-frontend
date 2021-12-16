<template>
  <ul class="flex gap-3" :class="{'text-white': dark}">
    <slot />
  </ul>
</template>

<script>
export default {
  name: "TheHeaderNav",
  props: {
    dark: { type: Boolean, default: false }
  }
}
</script>

