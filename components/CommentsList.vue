<template>
  <div>
    <h1 v-if="title" class="font-serif font-bold text-3xl mb-3">{{ title }}</h1>
    <new-comment v-if="$auth.loggedIn" class="mb-4" />
    <slot />
  </div>
</template>

<script>
import NewComment from "./CommentsNew";
export default {
  name: "CommentsList",
  components: {NewComment},
  props: {
    title: { type: String, default: 'Комментарии' }
  }

}
</script>
