<template>
  <div v-if="index !== null && items !== null"
       class="fixed h-screen w-full top-0 left-0 bg-black bg-opacity-60 flex flex-col">
    <div class="flex justify-between">
      <div></div>
      <div>
        <button @click="close"
                class="bg-gray-800 h-10 w-10 text-white">
          <fa :icon="['fa', 'times']" />
        </button>
      </div>
    </div>
    <div class="h-screen flex justify-between items-center">
      <div class="items-center hidden md:flex">
        <button @click="previous"
                class="bg-gray-800 h-10 w-10 text-white">
          <fa :icon="['fa', 'chevron-left']" />
        </button>
      </div>
      <div class="h-full flex items-center justify-center">
        <img class="lg:w-8/12"
             :src="items[index + deviation].url"
             :alt="items[index + deviation].title">
        <div class="text-center">
          <h1>{{ items.title }}</h1>
          <p>{{ items.description }}</p>
        </div>
      </div>
      <div class="items-center hidden md:flex">
        <button @click="next"
                class="bg-gray-800 h-10 w-10 text-white">
          <fa :icon="['fa', 'chevron-right']" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "../Button/AppButton";
export default {
  name: "LightBox",
  components: {AppButton},
  data: () => ({
    deviation: 0,
  }),
  methods: {
    previous() {
      if(this.index + this.deviation === 0){
        this.deviation = this.deviation + this.items.length - 1
      } else {
        this.deviation = this.deviation - 1
      }
    },
    next() {
      if(this.index + this.deviation === (this.items.length - 1)){
        this.deviation = this.deviation - this.items.length + 1
      } else {
        this.deviation = this.deviation + 1
      }
    },
    close() {
      this.$emit('close')
      this.deviation = 0
    }
  },
  props: {
    items: { type: Array, default: null },
    index: { type: Number, default: null }
  }
}
</script>

<style scoped>

</style>
