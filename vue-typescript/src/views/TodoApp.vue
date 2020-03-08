import Vue from 'vue';
<template>
  <div>
    <img style="width: 100px" alt="Vue logo" src="../assets/logo.png" />
    <h1>TodoApp</h1>
    <Form />
    <List />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Form from "@/components/todo-app/Form.vue";
import List from "@/components/todo-app/List.vue";
import Footer from "@/components/todo-app/Footer.vue";

export default {
  name: "todo-app",
  components: {
    Form,
    List,
    Footer
  }
};
</script>

<style scoped></style>
