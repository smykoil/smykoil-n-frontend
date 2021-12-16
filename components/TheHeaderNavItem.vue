<template>
  <li>
    <a v-if="!to" href="#" @click="$emit('click', $event)">
      <slot />
    </a>
    <NLink v-else :to="to" :exact="exact">
      <slot />
    </NLink>
  </li>
</template>

<script>
export default {
  name: "TheHeaderNavItem",
  props: {
    to: { type: String, default: ''},
    exact: { type: Boolean, default: false }
  }
}
</script>
