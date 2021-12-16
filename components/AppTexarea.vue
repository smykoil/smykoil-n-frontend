<template>
  <textarea
    class="h-20 transition duration-150 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-4 focus:ring-green-700 focus:ring-opacity-30"
    :id="id"
    :placeholder="placeholder"
    style="min-height: 5rem;"
  ></textarea>
</template>

<script>
export default {
  name: "AppTextarea",
  props: {
    id: { type: String, default: '' },
    placeholder: { type: String, default: '' },
  }
}
</script>
