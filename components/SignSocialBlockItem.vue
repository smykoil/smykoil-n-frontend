<template>
  <div>
    <app-button
      class="w-full text-gray-500"
      color="gray"
      icon-style="fab"
      :icon="icon"
      :title="title"
      @click="$emit('click')"
    >
      <span class="sr-only">{{ title }}</span>
    </app-button>
  </div>
</template>

<script>
import AppButton from "./AppButton";
export default {
  name: "SignSocialBlockItem",
  components: {AppButton},
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true }
  }
}
</script>
