<template>
  <div class="w-full flex">
    <app-button
      class="rounded-l-2xl px-4 w-12 text-xs h-12 font-bold"
      blank rounded-none color="gray" size="self"
      :to="'https://www.online-convert.com/ru/file-format/' + format">
      {{ format }}
    </app-button>
    <div class="flex-grow h-12 bg-gray-100 flex items-center px-2">
      <slot />
    </div>
    <app-button blank :to="link" color="gray" size="self" class="w-12 h-12 flex-grow-0 mr-px" rounded-none>
      <fa :icon="['fa', 'eye']" />
    </app-button>
    <app-button blank :to="downloadLink" color="gray" size="self" class="w-12 h-12 rounded-l-none">
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
        color: '#1e1e1e'
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
    format: { type: String, default: 'doc'},
    link: { type: String, required: true },
    downloadLink: { type: String, required: true }
  }
}
</script>

<style scoped>

</style>
