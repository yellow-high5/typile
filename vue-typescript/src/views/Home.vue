<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Typescript ☆ Vue" />
  </div>
</template>

<script lang="ts">
import HelloWorld from "@/components/home/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style scoped></style>
