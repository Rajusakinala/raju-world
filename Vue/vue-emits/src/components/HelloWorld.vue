<template>
  <div>Child{{ props.msg }}</div>
  <button @click="trigg">child button</button>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup(props, { emit }) {
    const trigg = function () {
      console.log("props :>> ", props);
      emit("parentAction");
    };
    return {
      trigg,
      props,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
