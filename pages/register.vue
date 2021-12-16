<template>
  <div>
    <sign-header>
      <template #default>Зарегистрируйтесь</template>
      <template #secondary>
        Или
        <app-link to="/login">
          войдите в аккаунт
        </app-link>
      </template>
    </sign-header>

    <sign-card>
      <sign-form @submit="registerAction">
        <form-group
          label="Имя"
          input-id="name"
          small
        >
          <form-input
            class="mb-4"
            name="name"
            v-model="form.name"
          />
        </form-group>
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
        <form-group
          label="Подтвердите пароль"
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
        <app-button class="w-full" type="submit">Зарегистрироваться</app-button>
      </sign-form>

      <sign-social-block title="Или зарегестрируйтесь через">
        <sign-social-block-item title="Войти через Одноклассники" icon="odnoklassniki"/>
        <sign-social-block-item title="Войти через Google" icon="google"/>
        <sign-social-block-item title="Войти через ВКонтакте" icon="vk"/>
      </sign-social-block>
    </sign-card>
  </div>
</template>

<script>
import SignHeader from "../components/SignHeader";
import AppLink from "../components/AppLink";
import SignCard from "../components/SignCard";
import SignForm from "../components/SignForm";
import FormGroup from "../components/FormGroup";
import FormInput from "../components/FormInput";
import FormCheckbox from "../components/FormCheckbox";
import AppButton from "../components/AppButton";
import SignSocialBlock from "../components/SignSocialBlock";
import SignSocialBlockItem from "../components/SignSocialBlockItem";

export default {
  name: "register",
  layout: 'auth',
  data: () => ({
    form: {
      email: '',
      name: '',
      password: '',
      password_confirmation: '',
    }
  }),
  methods: {
    registerAction() {
      //
    }
  },
  components: {
    SignSocialBlockItem,
    SignSocialBlock, AppButton, FormCheckbox, FormInput, FormGroup, SignForm, SignCard, AppLink, SignHeader
  }
}
</script>
