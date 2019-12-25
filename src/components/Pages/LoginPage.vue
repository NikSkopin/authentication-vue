<template>
  <div>
    <h1>Login Page</h1>
    <span>{{ error }}</span>
    <LoginForm @submit="login" />
  </div>
</template>
<script>
import LoginForm from '../forms/LoginForm.vue';
import AuthService from '../services/AuthService';

export default {
  data() {
    return {
      error: 'error!!!',
    };
  },
  components: {
    LoginForm,
  },
  methods: {
    async login(data) {
      this.error = null;
      try {
        const response = await AuthService.login({
          email: data.email,
          password: data.password,
        });
        // this.$store.dispatch('setToken', response.data.token);
        // this.$store.dispatch('setUser', response.data.user);
        // this.$router.push({
        //   name: 'homepage',
        // });
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>
<style></style>
