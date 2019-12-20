<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="email"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="email"
          v-model="userData.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="password"
          v-model="userData.password"
          type="password"
          required
          placeholder="Password"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3">
        <b-form-checkbox v-model="stayLoggedIn">Stay logged in</b-form-checkbox>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userData: {
        email: '',
        password: ''
      },
      loading: false,
      errors: {},
      stayLoggedIn: false
    };
  },
  methods: {
    onSubmit() {}
  }
};
</script>
<style>
</style>
