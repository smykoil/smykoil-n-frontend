<template>
  <div>
    <div v-if="title !== ''" class="flex items-center mb-4 gap-2">
      <img class="w-8" src="~static/images/s-sm-transparent-logo-light.png" alt="Smykoil inc.">
      <h1 class="text-3xl font-serif font-bold">{{ title }}</h1>
    </div>
    <ul class="leading-4 list-disc text-sm pl-4">
      <slot />
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheFooterNav",
  props: {
    title: { type: String, default: ''}
  }
}
</script>
