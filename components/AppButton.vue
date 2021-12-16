<template>
  <button
    v-if="!to"
    class="btn"
    @click="$emit('click')"
    :type="type"
    :class="classes"
  >
    <FaIcon v-if="icon !== null" :icon="[iconStyle, icon]" /><slot />
  </button>

  <NuxtLink
    v-else-if="!blank"
    class="btn"
    :class="classes"
    :to="to"
  >
    <FaIcon v-if="icon !== null" :icon="[iconStyle, icon]" /><slot />
  </NuxtLink>

  <a
    v-else
    :href="to"
    target="_blank"
    class="btn"
    :class="classes"
  >
    <FaIcon v-if="icon !== null" :icon="[iconStyle, icon]" /><slot />
  </a>
</template>

<script>
export default {
  name: "AppButton",
  computed: {
    classes: function () {
      return [
        `${this.color || 'green'}`,
        `${this.size || 'md'}`,
        { 'rounded-md': !this.roundedNone }
      ]
    }
  },
  props: {
    color: { type: String, default: 'green' },
    type: { type: String, default: '' },
    size: { type: String, default: 'md' },
    roundedNone: { type: Boolean, default: false },

    to: { type: String, default: null },
    iconStyle: { type: String, default: 'fa' },
    icon: { type: String, default: null },
    blank: { type: Boolean, default: false }
  }
}
</script>

<style scoped>
.btn.blue {@apply bg-blue-600 text-white;}
.btn.blue:hover {@apply bg-blue-700;}
.btn.blue:focus {@apply ring-blue-700 ring-4 ring-opacity-30;}

.btn.gray {@apply bg-white border border-gray-300 text-gray-800; }
.btn.gray:hover {@apply bg-gray-200;}
.btn.gray:focus {@apply ring-gray-400 ring-4 ring-opacity-30;}

.btn.green {@apply bg-green-600 text-white; }
.btn.green:hover {@apply bg-green-700;}
.btn.green:focus {@apply ring-green-700 ring-4 ring-opacity-30;}

.btn.red {@apply bg-red-600 text-white;}
.btn.red:hover {@apply bg-red-700;}
.btn.red:focus {@apply ring-red-700 ring-4 ring-opacity-30;}

.btn.sm {@apply px-4 py-1 text-sm;}
.btn.md {@apply px-4 py-2 text-sm;}
.btn.lg {@apply px-8 py-3 text-lg;}

.btn {@apply flex justify-center items-center transition gap-2;}
</style>
