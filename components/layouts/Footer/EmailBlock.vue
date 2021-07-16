<template>
  <div class="flex-wrap lg:flex-nowrap bg-gray-900 flex justify-center my-16 h-44 rounded-2xl px-4">
    <div class="hidden lg:flex w-4/12 flex items-end">
      <img class="w-full" src="~static/images/email-footer.png" alt="E-Mail">
    </div>
    <div class="w-full md:w-8/12 lg:w-5/12 flex items-center">
      <div class="md:px-12">
        <h1 class="text-2xl font-serif font-bold mb-2">Пришлите нам письмо</h1>
        <p class="text-sm">
          Если у вас есть вопросы или предложения, ждём ваших сообщений по этому адресу:
          <app-link blank dark :to="'mailto:' + email">{{ email }}</app-link>
        </p>
      </div>
    </div>
    <div class="w-full md:w-4/12 lg:w-1/12 flex items-center">
      Кнопка
    </div>
  </div>
</template>

<script>
import AppLink from "../../ui/Link/AppLink";
export default {
  name: "EmailBlock",
  props: {
    email: { type: String, required: true }
  },
  components: {AppLink}
}
</script>

<style scoped>

</style>
