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
  data() {
    return {
      error: '',
    };
  },
  components: {
    RegisterForm,
  },
  methods: {
    async register(data) {
      this.error = null;
      try {
        const response = await AuthService.register({
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
