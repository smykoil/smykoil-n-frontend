<template>
  <div>
    <label :for="name" class="block text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <div class="mt-1">
      <input
        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        :id="name"
        :name="name"
        :type="type"
        :autocomplete="autocomplete ? name : false"
        required
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "SignFormInput",
  props: {
    label: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String, default: 'text' },
    autocomplete: { type: Boolean, default: false }
  }
}
</script>
