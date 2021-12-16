<template>
  <button
    :class="$style.AppLightBoxButton"
    @click="$emit('click', $event.target.value)"
  >
    <FaIcon :icon="[iconStyle, icon]" />
  </button>
</template>

<script>
export default {
  name: "AppLightBoxButton",
  props: {
    iconStyle: {type: String, default: 'fa'},
    icon: {type: String, required: true}
  }
}
</script>

<style module>
.AppLightBoxButton {
  @apply bg-gray-800 h-10 w-10 text-white;
}
</style>
