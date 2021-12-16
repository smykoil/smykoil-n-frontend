<template>
  <div class="flex items-center">
    <input
      :id="name"
      :name="name"
      type="checkbox"
      class="checkbox"
    >
    <label :for="name" class="ml-2 block text-sm text-gray-900">
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  name: "FormCheckbox",
  props: {
    name: { type: String, required: true }
  }
}
</script>

<style scoped>
.checkbox {@apply h-4 w-4 text-green-600 border-gray-300 rounded transition;}
.checkbox:focus {@apply ring-4 ring-offset-0 ring-green-500 ring-opacity-30;}
</style>
