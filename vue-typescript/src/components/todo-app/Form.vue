<template>
  <div>
    <input type="form" v-model="todo" />
    <button @click="add">
      Add
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      todo: ""
    };
  },
  methods: {
    add() {
      this.$store.commit({
        type: "addTodo",
        id: this.$store.state.todos.length + 1,
        todo: this.todo
      });
      this.todo = "";
    }
  }
});
</script>

<style scoped>
div {
  margin: 10px;
}
</style>
