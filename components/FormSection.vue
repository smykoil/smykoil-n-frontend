<template>
  <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
    <div>
      <div>
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          {{ title }}
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
          {{ description }}
        </p>
      </div>

      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "FormSection",
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true }
  }
}
</script>
