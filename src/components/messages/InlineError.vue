<template>
  <span class="inline-error">{{ text }}</span>
</template>

<script>
export default {
  name: 'InlineError',
  props: ['text'],

  data() {
    return {};
  },
};
</script>

<style lang="css" scoped>
.inline-error {
  display: block;
  color: #ae5856;
  margin-bottom: 10px;
}
</style>
