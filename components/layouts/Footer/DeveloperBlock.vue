<template>
  <div>
    <h1 class="text-3xl font-bold font-serif mb-4">От разработчика</h1>
    <img class="mb-3" src="~static/images/smykoil-transparent-logo-light.png" alt="Smykoil inc.">
    <p>Powered by Smykoil inc.</p>
    <p>E-Mail: <app-link blank dark to="mailto:smykoil@ya.ru">smykoil@ya.ru</app-link></p>
    <p class="mb-2">
      Разработчик:
      <app-link blank dark to="https://github.com/mrthursby">Jack Thursby</app-link>
    </p>
    <div class="flex gap-2">
      <a href="https://vk.com/smykoil"
         target="_blank"
         class="w-8 h-8 flex items-center justify-center rounded-lg text-lg bg-blue-600">
        <fa :icon="['fab', 'vk']"></fa>
      </a>
      <a href="https://github.com/smykoil"
         target="_blank"
         class="w-8 h-8 flex items-center justify-center rounded-lg text-lg bg-gray-900">
        <fa :icon="['fab', 'github']"></fa>
      </a>
      <a href="https://gitlab.com/smykoil"
         target="_blank"
         class="w-8 h-8 flex items-center justify-center rounded-lg text-lg bg-yellow-600">
        <fa :icon="['fab', 'gitlab']"></fa>
      </a>
      <a href="mailto:smykoil@ya.ru"
         target="_blank"
         class="w-8 h-8 flex items-center justify-center rounded-lg text-lg bg-red-600">
        <fa :icon="['fa', 'at']"></fa>
      </a>
    </div>
  </div>
</template>

<script>
import AppLink from "../../ui/Link/AppLink";
export default {
  name: "DeveloperBlock",
  components: {AppLink}
}
</script>

<style scoped>

</style>
