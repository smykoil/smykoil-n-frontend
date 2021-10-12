<template>
  <div class="lg:hidden">
    <transition
      enter-active-class="transition duration-150"
      leave-active-class="transition duration-150"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        class="fixed bg-white text-black left-4 bottom-24 right-4 z-20 rounded-3xl py-4 shadow-lg"
        v-show="active"
      >
        <app-logo class="px-4 mb-4 justify-center" />
        <ul>
          <li v-for="(item, i) of mainMenu" :key="i + '-main-menu-item'">
            <nuxt-link
              class="w-full flex items-center px-4 h-8 focus:bg-gray-200"
              active-class="bg-gray-200"
              :to="item.to">{{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </transition>
    <div class="fixed rounded-3xl bottom-4 left-4 right-4 bg-white text-black flex justify-between items-center z-10 h-14 shadow-lg">
      <div class="flex items-center gap-2 p-2">
        <img class="w-10 rounded-full" src="~static/images/anon-user.png" alt="Anonymous">
        <app-link>Войти</app-link>
      </div>
      <div class="p-2">
        <app-button
          @click="active = !active"
          class="h-10 w-10"
          color="gray"
          size="self">
          <fa :icon="['fa', 'bars']"></fa>
        </app-button>
      </div>
    </div>
  </div>
</template>

<script>
import AppLink from "../ui/Link/AppLink";
import AppButton from "../ui/Button/AppButton";
import AppLogo from "./Header/AppLogo";
export default {
  name: "MobileNavbar",
  data() {
    return {
      active: false,
    }
  },
  computed: {
    mainMenu() {
      return this.$store.getters['mainMenu']
    }
  },
  components: {AppLogo, AppButton, AppLink}
}
</script>

<style scoped>

</style>
