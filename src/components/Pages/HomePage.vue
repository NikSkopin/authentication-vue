<template>
  <div>
    <h1>Hello!</h1>
    <div v-if="!$store.state.isUserLoggedIn">
      <router-link to="/register">Register</router-link>
      <router-link to="/login">Login</router-link>
    </div>
    <div v-else>
      <span>You are logged in. <a href="#" @click="logout">Logout.</a></span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null);
      this.$router.push({
        name: 'homepage',
      });
    },
  },
};
</script>

<style></style>
