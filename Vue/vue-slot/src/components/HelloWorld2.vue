<template>
  <h3>Child</h3>
  <slot name="slot1">default slot 1</slot>
  <div>
    <slot name="slot2">default slot 2</slot>
  </div>
</template>

<script>
export default {
  name: "HelloWorld2",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
