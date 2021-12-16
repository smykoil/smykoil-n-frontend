<template>
  <form
    class="space-y-8 divide-y divide-gray-200"
    @submit.prevent="$emit('submit', $event)"
  >
    <slot />
  </form>
</template>

<script>
export default {
  name: "AppForm"
}
</script>
