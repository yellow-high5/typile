<template>
  <div>
    <span>Show: </span>
    <button @click="toggle">
      All
    </button>
    <button>
      Active
    </button>
    <button>
      Completed
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    toggle() {
      this.$store.commit({
        type: "toggleFilter",
        toggle: "ACTIVE"
      });
    }
  }
});
</script>

<style scoped>
div {
  margin: 10px;
}
</style>
