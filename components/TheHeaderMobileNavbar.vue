<template>
  <div class="wrapper" v-click-outside="closeMenuAction">
    <transition
      enter-active-class="transition-all duration-150"
      leave-active-class="transition-all duration-150"
      enter-class="-bottom-96"
      enter-to-class="bottom-12"
      leave-class="bottom-12"
      leave-to-class="-bottom-96"
    >
      <div class="menu bottom-14" v-show="active">
        <app-logo class="menu__logo" />
        <ul>
          <li v-for="(item, i) of mainMenu" :key="i + '-main-menu-item'">
            <nuxt-link
              class="menu__item"
              active-class="bg-gray-200"
              :to="item.to">{{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </transition>

    <div class="bar">
      <div class="user-block">
        <template v-if="!$auth.loggedIn">
          <img class="user-block__avatar" src="~static/images/anon-user.png" alt="Anonymous">
          <app-link to="/login">Войти</app-link>
        </template>
        <template v-if="$auth.loggedIn">
          <img class="user-block__avatar" :src="$auth.user.avatar_thumb" :alt="$auth.user.name">
          <app-link v-if="$auth.loggedIn" to="/profile">{{ $auth.user.first_name }}</app-link>
        </template>
      </div>
      <div class="p-2">
        <app-button
          @click="active = !active"
          class="h-10 w-10"
          color="gray"
          icon="bars"
          size=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppLink from "./AppLink";
import AppButton from "./AppButton";
import AppLogo from "./TheHeaderLogo";
export default {
  name: "TheHeaderMobileNavbar",
  data() {
    return {
      active: false,
    }
  },
  methods: {
    closeMenuAction() {
      this.active = false
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
.wrapper {@apply lg:hidden;}

.menu {@apply fixed border-t bg-white text-black left-0 right-0 z-10 rounded-t-xl py-4;}
.menu__logo {@apply px-4 mb-4 justify-center;}
.menu__item {@apply w-full flex items-center border-b px-4 h-12 focus:bg-gray-200;}
li:last-child .menu__item {@apply border-b-0;}

.bar {
  @apply
  fixed transition-all
  bottom-0 left-0 right-0
  bg-white text-black border-t
  flex justify-between items-center
  z-10 h-14 shadow-lg
}

.user-block {@apply flex items-center gap-2 p-2;}
.user-block__avatar {@apply w-10 rounded-full;}
</style>
