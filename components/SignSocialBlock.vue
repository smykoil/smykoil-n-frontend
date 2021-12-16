<template>
  <div class="mt-6">
    <separator>{{ title }}</separator>

    <div
      class="mt-6 grid gap-3"
      :class="`grid-cols-${cols}`"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import Separator from "./AppSeparator";
export default {
  name: "SignSocialBlock",
  props: {
    cols: { type: Number, default: 3 },
    title: { type: String, default: 'Или войдите через' }
  },
  components: {Separator}
}
</script>
