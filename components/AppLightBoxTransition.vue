<template>
  <Transition
    :enter-active-class="$style.TransitionActive"
    :leave-active-class="$style.TransitionActive"
    :leave-to-class="$style.TransitionLeaveTo"
    :enter-class="$style.TransitionEnter"
    :mode="mode"
  >
    <slot />
  </Transition>
</template>

<script>
export default {
  name: "AppLightBoxTransition",
  props: {
    mode: {
      type: String,
      default: 'in-out',

      validator: value => {
        return ['out-in', 'in-out'].includes(value)
      }
    }
  }
}
</script>

<style module>
.TransitionActive {
  transition: opacity .3s;
}

.TransitionEnter, .TransitionLeaveTo {
  opacity: 0;
}
</style>
