<template>
  <div class="flex gap-2 mb-4 last:mb-0">
    <div class="flex-shrink-0 w-20">
      <img class="rounded" src="~static/images/anon-user.png" alt="user">
    </div>
    <div class="flex-grow flex flex-col">
      <div>
        <app-link class="font-bold">Jack Thursby</app-link>
      </div>
      <p>
        Текст комментария комментария комментария комментария комментария
        комментария комментария комментария комментария комментария комментария комментария комментария
      </p>
      <div class="flex gap-4 mb-4 last:mb-0">
        <app-link @click="newComment = !newComment" button
                  class="text-sm">{{ newComment ? 'Не отвечать' : 'Ответить' }}</app-link>
        <app-link class="text-sm">Нравится</app-link>
      </div>
      <new-comment class="mb-4" v-if="newComment" />
      <slot />
    </div>
  </div>
</template>

<script>
import AppLink from "../Link/AppLink";
import NewComment from "./NewComment";
export default {
  name: "Comment",
  data: () => ({
    newComment: false,
  }),
  components: {NewComment, AppLink}
}
</script>

<style scoped>

</style>
