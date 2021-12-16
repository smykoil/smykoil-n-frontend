<template>
  <div class="py-8">
    <app-form>
      <form-section
        title="Основная информация"
        description="фвфывфыв"
      >
        <form-group
          label="Имя"
          input-id="first_name"
        >
          <form-input
            name="first_name"
            prefix=""
            v-model="infoForm.first_name"
          ></form-input>
        </form-group>
        <form-group
          label="Фамилия"
          input-id="first_name"
        >
          <form-input
            name="first_name"
            prefix=""
            v-model="infoForm.last_name"
          ></form-input>
        </form-group>
      </form-section>
      <div class="pt-5">
        <div class="flex justify-end gap-3">
          <app-button color="gray">Отменить</app-button>
          <app-button>Сохранить</app-button>
        </div>
      </div>
    </app-form>
    <app-form>
      <form-section
        title="Пароль"
        description="фвфывфыв"
      >
        <form-group
          label="Текущий пароль"
          input-id="current_password"
        >
          <form-input
            name="current_password"
            type="password"
            v-model="passwordForm.current_password"
          />
        </form-group>
        <form-group
          label="Новый пароль"
          input-id="password"
        >
          <form-input
            name="password"
            type="password"
            v-model="passwordForm.password"
          />
        </form-group>
        <form-group
          label="Подтвердите новый пароль"
          input-id="password"
        >
          <form-input
            name="password_confirmation"
            type="password"
            v-model="passwordForm.password_confirmation"
          />
        </form-group>
      </form-section>
      <div class="pt-5">
        <div class="flex justify-end gap-3">
          <app-button color="gray">Отменить</app-button>
          <app-button>Сохранить</app-button>
        </div>
      </div>
    </app-form>
  </div>
</template>

<script>
import AppInput from "../components/AppInput";
import FormInput from "../components/FormInput";
import AppButton from "../components/AppButton";
import FormSection from "../components/FormSection";
import FormGroup from "../components/FormGroup";
import AppForm from "../components/AppForm";

export default {
  name: "ProfileEdit",
  middleware: 'auth',
  data: () => ({
      infoForm: {
        first_name: '',
        last_name: '',
      },
      passwordForm: {
        current_password: '',
        password: '',
        password_confirmation: '',
      },
      avatarForm: {
        photo: null,
      },
  }),
  mounted: function () {
    this.infoForm.first_name = this.$auth.user.first_name
    this.infoForm.last_name  = this.$auth.user.last_name
  },
  components: {AppForm, FormGroup, FormSection, AppButton, FormInput, AppInput}
}
</script>
