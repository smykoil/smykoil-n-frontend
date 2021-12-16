<template>
  <div class="flex-wrap lg:flex-nowrap bg-gray-900 flex justify-center my-16 md:h-44 rounded-2xl px-4 py-8 md:py-0">
    <div class="hidden lg:flex w-4/12 flex items-end">
      <img class="w-full -mb-8" src="~static/images/email-footer.svg" alt="E-Mail">
    </div>
    <div class="w-full md:w-8/12 lg:w-5/12 flex items-center mb-4 md:mb-0">
      <div class="md:px-12">
        <h1 class="text-2xl font-serif font-bold mb-2">Пришлите нам письмо</h1>
        <p class="text-sm">
          Если у вас есть вопросы или предложения, ждём ваших сообщений по этому адресу:
          <app-link blank dark :to="'mailto:' + email">{{ email }}</app-link>
        </p>
      </div>
    </div>
    <div class="w-full md:w-4/12 lg:w-3/12 flex items-center">
      <app-button blank to="mailto:lybow75@ya.ru">Отправить E-Mail</app-button>
    </div>
  </div>
</template>

<script>
import AppLink from "./AppLink";
import AppButton from "./AppButton";
export default {
  name: "TheFooterEmailBlock",
  props: {
    email: { type: String, required: true }
  },
  components: {AppButton, AppLink}
}
</script>
