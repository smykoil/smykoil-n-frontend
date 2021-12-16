<template>
  <article>
    <app-link :to="link">
      <h1 class="font-serif font-bold text-xl mb-2">
        {{ title }}
      </h1>
    </app-link>
    <div class="mb-2">
      <app-link :to="category.link">{{ category.title }}</app-link>
    </div>
    <nuxt-link :to="link">
      <p>{{ description }}</p>
    </nuxt-link>
    <hr class="my-3" />
    <div class="flex gap-4">
      <nuxt-link class="text-gray-700 hover:text-gray-600 focus:text-gray-800"
                 :to="link">
        <fa :icon="['fa', 'calendar-week']" />
        {{ created_at }}
      </nuxt-link>
      <nuxt-link class="text-gray-700 hover:text-gray-600 focus:text-gray-800"
                 :to="link + '#comments'">
        <fa :icon="['fa', 'comment']" />
        {{ comments_count }}
      </nuxt-link>
    </div>
  </article>
</template>

<script>
import AppLink from "./AppLink";
export default {
  name: "Categorizable",
  data: () => ({
    link: '/article/1',
    title: 'Игры и игровые упражнения по развитию альтернативной коммуникации',
    description: 'Счастье - это когда тебя понимают. Но как понять ребенка, который не может говорить? Как общаться ' +
      'с детьми, у которых имеются нарушения в развитии? Общение — это не просто беседа, а обмен информацией. Это ' +
      'возможность донести другому свои мысли, желания, выразить просьбу. В нашем привычном представлении обмен ' +
      'информацией происходит при помощи слов.',
    category: {
      title: 'Игротека',
      link: '#',
    },
    created_at: '21 янв',
    comments_count: '2 комментария',
  }),
  components: {AppLink}
}
</script>
