<template>
  <div class="w-full flex">
    <div class="w-12 h-12 flex items-center justify-center rounded-l"
         :style="formats[format] || formats['null']">
      {{ format || '?'}}
    </div>
    <div class="flex-grow h-12 flex items-center px-2">
      <slot />
    </div>
    <app-button color="blue" size="self" class="w-12 h-12 flex-grow-0" rounded-none>
      <fa :icon="['fa', 'eye']" />
    </app-button>
    <app-button color="green" size="self" class="w-12 h-12 rounded-l-none">
      <fa :icon="['fa', 'cloud-download-alt']" />
    </app-button>
  </div>
</template>

<script>
import AppLink from "../Link/AppLink";
import AppButton from "../Button/AppButton";
export default {
  name: "ApplicationItem",
  components: {AppButton, AppLink},
  data: () => ({
    formats: {
      null: {
        backgroundColor: '#ababab',
        color: '#fff'
      },
      ppt: {
        backgroundColor: '#C44423',
        color: '#fff'
      },
      pdf: {
        backgroundColor: '#c41211',
        color: '#fff'
      },
      pptx: {
        backgroundColor: '#C44423',
        color: '#fff'
      },
      doc: {
        backgroundColor: '#295391',
        color: '#fff'
      },
      docx: {
        backgroundColor: '#295391',
        color: '#fff'
      },
      png: {
        backgroundColor: '#22cf24',
        color: '#fff'
      },
      jpg: {
        backgroundColor: '#22cf24',
        color: '#fff'
      },
      jpeg: {
        backgroundColor: '#22cf24',
        color: '#fff'
      },
    }
  }),
  props: {
    format: { type: String, default: 'doc'}
  }
}
</script>

<style scoped>

</style>
