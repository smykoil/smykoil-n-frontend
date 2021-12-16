<template>
  <div class="flex rounded-md shadow-sm">
    <input
      class="input"
      :class="{'invalid': invalid}"
      @input="$emit('input', $event.target.value)"
      :value="value"
      :type="type"
      :name="name"
      :id="name"
      :autocomplete="name"
    >
  </div>
</template>

<script>
import AppInput from "./AppInput";
export default {
  name: "FormInput",
  components: {AppInput},
  props: {
    name: { type: String, required: true },
    value: { type: String, default: '' },
    type: { type: String, default: 'text' },
    invalid: { type: Boolean, default: false }
  }
}
</script>

<style scoped>
.input {@apply flex-1 block w-full min-w-0 rounded-md sm:text-sm border-gray-300 transition;}
.input:focus {@apply ring-4 ring-green-500 ring-opacity-30 border-green-500;}

.input.invalid {@apply border-red-500;}
.input.invalid:focus {@apply ring-4 ring-red-500 ring-opacity-30 border-red-500;}
</style>
