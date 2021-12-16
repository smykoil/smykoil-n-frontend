<template>
  <form
    @submit.prevent="$emit('submit', $event)"
    class="space-y-6"
  >
    <slot />
  </form>
</template>

<script>
export default {
  name: "SignForm"
}
</script>
