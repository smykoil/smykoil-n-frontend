<template>
  <input
    :class="$style.AppInput"
    :id="id"
    :type="type"
    :value="value"
    :placeholder="placeholder"
    @input="$emit('input', $event.target.value)"
  >
</template>

<script>
export default {
  name: "AppInput",
  props: {
    id: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    value: { type: String, default: '' },

    type: {
      type: String,
      default: 'text',

      validator: value => {
        return [
          'text',
          'email',
          'number',
          'search',
          'password',
          'url',
          'tel'
        ].includes(value)
      }
    },
  }
}
</script>

<style module>
.AppInput {@apply transition h-10 px-2 duration-150 rounded-md border-gray-300 shadow-sm border border-gray-300;}
.AppInput:focus {@apply outline-none border-green-500 ring-4 ring-green-600 ring-opacity-30;}
</style>
