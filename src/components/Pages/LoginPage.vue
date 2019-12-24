<template>
  <div>
    <h1>Login Page</h1>
    <LoginForm @submit="submit" />
  </div>
</template>
<script>
import LoginForm from '../forms/LoginForm.vue';

export default {
  components: {
    LoginForm,
  },
  methods: {
    submit(data) {
      console.log(data);
    },
  },
};
</script>
<style></style>
