<template>
  <transition name="fade">
    <div v-if="index !== null && items !== null" @mousemove="doDrag"
         class="fixed h-screen w-full top-0 left-0 bg-black bg-opacity-80 flex flex-col z-20">
      <div class="fixed top-0 left-0 w-screen h-screen" @click="close"></div>
      <div class="flex justify-between z-30 p-4">
        <div></div>
        <div>
          <button @click="close"
                  class="bg-gray-800 h-10 w-10 text-white">
            <fa :icon="['fa', 'times']" />
          </button>
        </div>
      </div>
      <div class="h-screen flex justify-between items-center">
        <div class="items-center hidden md:flex z-30 p-4">
          <button @click="previous"
                  class="bg-gray-800 h-10 w-10 text-white">
            <fa :icon="['fa', 'chevron-left']" />
          </button>
        </div>
        <div class="h-full flex items-center justify-center">
          <transition name="fade" mode="out-in">
            <div
                 class="flex items-center justify-center transition-transform duration-300"
                 :class="{'transform scale-150': zoomed}"
                 v-if="(index + deviation) === i"
                 :key="`${i}-slide`"
                 v-for="(item, i) of items">
              <div class="flex flex-col lg:w-8/12 ">
                <img ref="img" class="mb-4 z-30"
                     :class="{'transition-all duration-300': !dragging, 'cursor-grab': zoomed, 'cursor-zoom-in': !zoomed}"
                     :style="dragStyle"
                     @dblclick="zoom"
                     @mousedown="dragStart($event)" @mouseup="dragStop" :draggable="false"
                     :src="item.url"
                     :alt="item.title">
                <transition name="fade">
                  <div v-if="!zoomed" class="flex justify-between z-30">
                    <div>
                      <h1 class="text-white mb-2">{{ item.title }} {{ i }} -- {{ `${x} ${y} ${offsetX} ${offsetY}` }}</h1>
                      <p class="text-gray-300">{{ item.description }}</p>
                    </div>
                    <div class="text-gray-300">
                      {{ `${i + 1}/${items.length}`}}
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </transition>
        </div>
        <div class="items-center hidden md:flex z-30 p-4">
          <button @click="next"
                  class="bg-gray-800 h-10 w-10 text-white">
            <fa :icon="['fa', 'chevron-right']" />
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import AppButton from "../Button/AppButton";
export default {
  name: "LightBox",
  components: {AppButton},
  data: () => ({
    deviation: 0,
    zoomed: false,
    dragging: false,
    x: null,
    y: null,
    offsetX: null,
    offsetY: null,
  }),
  computed: {
    dragStyle() {
      return {
        position: 'relative',
        left: this.x !== null ? this.x + 'px' : 0 + 'px',
        top: this.y !== null ? this.y + 'px' : 0 +  'px'
      }
    }
  },
  methods: {
    previous() {
      if(this.index + this.deviation !== 0){
        this.deviation = this.deviation - 1
      }
    },
    next() {
      if(this.index + this.deviation !== (this.items.length - 1)){
        this.deviation = this.deviation + 1
      }
    },
    close() {
      this.$emit('close')
      this.deviation = 0
      this.zoomed = false
      this.x = this.y = 0
    },
    zoom() {
      this.zoomed = !this.zoomed
      if(this.zoomed === false) {
        this.x = this.y = 0
      }
    },
    dragStart: function (e) {
      this.dragging = true
      if(this.zoomed) {
        this.offsetX = (e.target.width / 2) - e.layerX
        this.offsetY = (e.target.height / 2) - e.layerY
      }
    },
    dragStop() {
      this.dragging = false
    },
    doDrag(event) {
      if (this.dragging && this.zoomed) {
        this.x = (event.clientX - (window.innerWidth / 2) + this.offsetX * 1.5) / 1.5
        this.y = (event.clientY - (window.innerHeight / 2) + this.offsetY * 1.5) / 1.5
      }
    },
  },
  props: {
    items: { type: Array, default: null },
    index: { type: Number, default: null }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
