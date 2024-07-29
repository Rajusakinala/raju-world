<template>
  <div>
    <!-- <form> -->
    <div>
      <label for="name">Name</label>
      <!-- <input id="name" v-model="name" /> -->
      <InputText id="name" v-model="name" placeholder="enter here" />
    </div>
    <div>
      <!-- <button type="submit">Save</button> -->
      <button @click="saveHandler">Save</button>
    </div>
    <!-- </form> -->
  </div>
  <div v-if="dataArray.length === 0">No data</div>
  <div v-for="(item, index) in dataArray" :key="item">
    <div>
      <button @click="editHandler(index)">Edit</button>
      <button @click="deleteHandler(index)">delete</button>
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
// const text = ref();
export default {
  name: "App",
  components: {},
  data() {
    return {
      name: "",
      dataArray: [],
      editOperation: false,
      editIndex: null,
    };
  },
  methods: {
    saveHandler() {
      if (!this.editOperation) {
        this.dataArray.push(this.name);
      } else {
        this.dataArray.splice(this.editIndex, 1, this.name);
      }

      this.name = "";
      // console.log("this.dataArray", this.dataArray);
      this.editOperation = false;
    },
    deleteHandler(index) {
      this.dataArray.splice(index, 1);
    },
    editHandler(index) {
      this.name = this.dataArray[index];
      this.editOperation = true;
      this.editIndex = index;
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
