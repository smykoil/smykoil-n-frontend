<template>
  <div :class="[$style.AppContainer, {'px-4': !selfPadding}]">
    <slot />
  </div>
</template>

<script>
export default {
  name: "AppContainer",
  props: {
    selfPadding: { type: Boolean, default: false }
  }
}
</script>

<style module>
/*.AppContainer {@apply container mx-auto px-4;}*/
.AppContainer {@apply max-w-7xl mx-auto;}
</style>
