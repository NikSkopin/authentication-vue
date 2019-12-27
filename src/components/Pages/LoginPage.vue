<template>
  <div>
    <h1>Login Page</h1>
    <b-alert show variant="danger" v-if="error">{{ error }}</b-alert>
    <LoginForm @submit="login" />
  </div>
</template>
<script>
import LoginForm from '../forms/LoginForm.vue';
import AuthService from '../services/AuthService';

export default {
  data() {
    return {
      error: '',
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
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.email);
        this.$router.push({
          name: 'homepage',
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>
<style></style>
