<template>
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <nuxt-link class="flex justify-center items-center" to="/">
      <img
        class="h-12 w-auto mr-2"
        src="~/static/favicon.png"
        alt="Workflow"
      >
      <span class="text-4xl font-serif font-bold">Nataly</span>
    </nuxt-link>
    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
      <slot />
    </h2>
    <p class="mt-2 text-center text-sm text-gray-600">
      <slot name="secondary" />
    </p>
  </div>
</template>

<script>
export default {
  name: "SignHeader",
}
</script>
