<template>
  <div>
    <Item
      v-for="todo in this.$store.state.todos"
      v-bind:key="todo.id"
      :name="todo.name"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Item from "./Item.vue";

export default Vue.extend({
  components: {
    Item
  }
});
</script>

<style scoped>
div {
  margin: 10px;
}
</style>
