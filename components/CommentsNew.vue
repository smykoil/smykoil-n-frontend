<template>
  <div class="flex gap-2">
    <div class="flex-shrink-0 w-12">
      <img class="rounded-full" :src="$auth.user.avatar_thumb" alt="user">
    </div>
    <div class="flex-grow flex flex-col">
      <span class="font-bold mb-1">{{ $auth.user.first_name }} {{ $auth.user.last_name }}</span>
      <app-texarea
        class="mb-2"
        placeholder="Напишите что-нибудь..."
      />
      <div>
        <app-button>Оставить комментарий</app-button>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "./AppButton";
import AppTexarea from "./AppTexarea";

export default {
  name: "CommentsNew",
  components: {AppTexarea, AppButton}
}
</script>
