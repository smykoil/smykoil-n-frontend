<template>
  <div class="flex gap-2">
    <div class="flex-shrink-0 w-12">
      <img class="rounded-full" src="~static/images/anon-user.png" alt="user">
    </div>
    <div class="flex-grow flex flex-col">
      <span class="font-bold">Jack Thursby</span>
      <textarea class="mb-2 h-20 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Напишите что-нибудь..."
                style="min-height: 5rem;"/>
      <div>
        <app-button size="sm">Оставить комментарий</app-button>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "../Button/AppButton";
export default {
  name: "NewComment",
  components: {AppButton}
}
</script>

<style scoped>

</style>
