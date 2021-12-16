<template>
  <AppLightBoxTransition>
    <div
      v-if="index !== null && items !== null"
      :class="$style.AppLightBoxWrapper"
      @mousemove="doDrag"
    >
      <div :class="$style.AppLightBoxOverlay" @click="close" />
      <div :class="$style.AppLightBoxHeader">
        <AppLightBoxButton @click="close" icon="times" />
      </div>
      <div class="h-full flex justify-between items-center">
        <div :class="$style.AppLightBoxSideBar">
          <AppLightBoxButton @click="previous" icon="chevron-left" />
        </div>

        <div class="h-full flex items-center justify-center">
          <AppLightBoxTransition mode="out-in">
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
                <AppLightBoxTransition>
                  <div v-if="!zoomed" class="flex justify-between z-30">
                    <div>
                      <h1 class="text-white mb-2">{{ item.title }} {{ i }} -- {{
                          `${x} ${y} ${offsetX} ${offsetY}`
                        }}</h1>
                      <p class="text-gray-300">{{ item.description }}</p>
                    </div>
                    <div class="text-gray-300">
                      {{ `${i + 1}/${items.length}` }}
                    </div>
                  </div>
                </AppLightBoxTransition>
              </div>
            </div>
          </AppLightBoxTransition>
        </div>

        <div :class="$style.AppLightBoxSideBar">
          <AppLightBoxButton @click="next" icon="chevron-right" />
        </div>
      </div>
    </div>
  </AppLightBoxTransition>
</template>

<script>
import AppButton from "./AppButton";
import AppLightBoxButton from "./AppLightBoxButton";
import AppLightBoxTransition from "./AppLightBoxTransition";

export default {
  name: "AppLightBox",
  components: {AppLightBoxTransition, AppLightBoxButton, AppButton},
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
        top: this.y !== null ? this.y + 'px' : 0 + 'px'
      }
    }
  },
  methods: {
    previous() {
      if (this.index + this.deviation !== 0) {
        this.deviation = this.deviation - 1
      }
    },
    next() {
      if (this.index + this.deviation !== (this.items.length - 1)) {
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
      if (this.zoomed === false) {
        this.x = this.y = 0
      }
    },
    dragStart: function (e) {
      this.dragging = true
      if (this.zoomed) {
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
    items: {type: Array, default: null},
    index: {type: Number, default: null}
  }
}
</script>

<style module>
.AppLightBoxWrapper {
  @apply fixed h-screen w-full top-0 left-0 flex flex-col z-20;
}

.AppLightBoxOverlay {
  @apply fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80;
}

.AppLightBoxHeader {
  @apply flex justify-end z-30 p-4;
}

.AppLightBoxSideBar {
  @apply items-center hidden md:flex z-30 p-4;
}
</style>
