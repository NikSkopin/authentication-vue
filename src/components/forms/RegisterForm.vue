<template>
  <div>
    <b-form @submit="onSubmit" novalidate>
      <b-form-group id="input-group-1" label="Email address:" label-for="email">
        <b-form-input
          id="email"
          v-model="userData.email"
          type="email"
          placeholder="example@example.com"
          :state="errors.email ? false : null"
        ></b-form-input>
        <InlineError v-if="errors.email" :text="errors.email" />
      </b-form-group>
      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="password"
          v-model="userData.password"
          type="password"
          placeholder="Must contain 6 or more characters"
          :state="errors.password ? false : null"
        ></b-form-input>
        <InlineError v-if="errors.password" :text="errors.password" />
      </b-form-group>

      <b-button type="submit" variant="primary">Register</b-button>
    </b-form>
  </div>
</template>
<script>
import Validator from 'validator';
import InlineError from '../messages/InlineError.vue';

export default {
  name: 'RegisterForm',

  data() {
    return {
      userData: {
        email: '',
        password: '',
      },
      errors: {},
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
      if (Object.keys(errors).length === 0) {
        this.$emit('submit', this.userData);
      }
    },
    validate(data) {
      const errors = {};
      if (!Validator.isEmail(data.email)) errors.email = 'Invalid email';
      // TODO add password pattern validation
      if (!data.password) errors.password = "Can't be blank";

      return errors;
    },
  },
};
</script>
<style></style>
