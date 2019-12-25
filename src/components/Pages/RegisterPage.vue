<template>
  <div>
    <h1>Register Page</h1>
    <RegisterForm @submit="register" />
  </div>
</template>

<script>
import RegisterForm from '../forms/RegisterForm.vue';
import AuthService from '../services/AuthService';

export default {
  components: {
    RegisterForm,
  },
  methods: {
    async register() {
      const response = await AuthService.register({
        email: this.email,
        password: this.password,
      });
      console.log(response.data);
    },
  },
};
</script>

<style></style>
