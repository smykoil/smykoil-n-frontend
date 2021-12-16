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
        <FaIcon :icon="['fab', 'vk']"></FaIcon>
      </a>
      <a href="https://github.com/smykoil"
         target="_blank"
         class="w-8 h-8 flex items-center justify-center rounded-lg text-lg bg-gray-900">
        <FaIcon :icon="['fab', 'github']"></FaIcon>
      </a>
      <a href="https://gitlab.com/smykoil"
         target="_blank"
         class="w-8 h-8 flex items-center justify-center rounded-lg text-lg bg-yellow-600">
        <FaIcon :icon="['fab', 'gitlab']"></FaIcon>
      </a>
      <a href="mailto:smykoil@ya.ru"
         target="_blank"
         class="w-8 h-8 flex items-center justify-center rounded-lg text-lg bg-red-600">
        <FaIcon :icon="['fa', 'at']"></FaIcon>
      </a>
    </div>
  </div>
</template>

<script>
import AppLink from "./AppLink";
export default {
  name: "TheFooterDeveloperBlock",
  components: {AppLink}
}
</script>
