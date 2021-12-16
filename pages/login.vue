<template>
  <div>
    <sign-header>
      <template #default>Войдите в аккаунт</template>
      <template #secondary>
        Или
        <app-link to="/register">
          зарегистрируйтесь
        </app-link>
      </template>
    </sign-header>

    <sign-card>
      <sign-form @submit="loginAction">
        <form-group
          label="Email адрес"
          input-id="email"
          small
        >
          <form-input
            class="mb-4"
            type="email"
            name="email"
            v-model="form.email"
          />
        </form-group>
        <form-group
          label="Пароль"
          input-id="password"
          small
        >
          <form-input
            class="mb-4"
            name="password"
            type="password"
            v-model="form.password"
          />
        </form-group>
        <div class="flex items-center justify-between">
          <form-checkbox name="remember-me">
            Запомнить меня
          </form-checkbox>
          <app-link to="/forgot-password" class="text-sm">Забыли пароль?</app-link>
        </div>
        <app-button class="w-full" type="submit">Войти</app-button>
      </sign-form>

      <sign-social-block>
        <sign-social-block-item title="Войти через Одноклассники" icon="odnoklassniki" />
        <sign-social-block-item title="Войти через Google"        icon="google" />
        <sign-social-block-item title="Войти через ВКонтакте"     icon="vk" />
      </sign-social-block>
    </sign-card>
  </div>
</template>

<script>
import AppButton from "../components/AppButton";
import AppInput from "../components/AppInput";
import FormInput from "../components/FormInput";
import FormGroup from "../components/FormGroup";
import SignHeader from "../components/SignHeader";
import SignForm from "../components/SignForm";
import SignCard from "../components/SignCard";
import SignSocialBlock from "../components/SignSocialBlock";
import SignSocialBlockItem from "../components/SignSocialBlockItem";
import FormCheckbox from "../components/FormCheckbox";
import AppLink from "../components/AppLink";

export default {
  name: 'login',
  layout: 'auth',
  middleware: 'auth',
  auth: 'guest',
  data: () => ({
    form: {
      email: '',
      password: ''
    },
    errors: {}
  }),
  methods: {
    async loginAction() {
      await this.$axios.$get('/sanctum/csrf-cookie').then(() => {
        this.$auth.loginWith('local', {
          data: {...this.form, device_name: navigator.userAgent}
        }).catch(e => {
          this.errors = e?.response?.code === 422 ? e.response.data.errors : {}
        })
      })
    }
  },
  components: {
    AppLink,
    FormCheckbox,
    SignSocialBlockItem,
    SignSocialBlock, SignCard, SignForm, SignHeader, FormGroup, FormInput, AppInput, AppButton
  }
}
</script>
