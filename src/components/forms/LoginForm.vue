<template>
  <div>
    <b-form @submit="onSubmit" novalidate>
      <b-form-group id="input-group-1" label="Email address:" label-for="email">
        <b-form-input
          id="email"
          v-model="userData.email"
          type="email"
          placeholder="example@example.com"
        ></b-form-input>
        <InlineError :text="errors.email" />
      </b-form-group>
      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="password"
          v-model="userData.password"
          type="password"
          placeholder="Password"
        ></b-form-input>
        <InlineError :text="errors.password" />
      </b-form-group>

      <b-form-group id="input-group-3">
        <b-form-checkbox v-model="stayLoggedIn">Stay logged in</b-form-checkbox>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>
<script>
import Validator from 'validator';
import InlineError from '../messages/InlineError.vue';

export default {
  name: 'LoginForm',

  data() {
    return {
      userData: {
        email: '',
        password: '',
      },
      loading: false,
      errors: {
        email: '',
        password: '',
      },
      stayLoggedIn: false,
    };
  },
  components: {
    InlineError,
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      const errors = this.validate(this.userData);
      this.errors = errors;
    },
    validate(data) {
      const errors = {};
      if (!Validator.isEmail(data.email)) errors.email = 'Invalid email';
      if (!data.password) errors.password = "Can't be blank";
      console.log(this.errors);

      return errors;
    },
  },
};
</script>
<style></style>
