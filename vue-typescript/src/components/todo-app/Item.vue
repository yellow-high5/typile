<template>
  <div>
    <li @click="complete" :class="isComplete">
      {{ name }}
    </li>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: { name: { type: String } },
  data() {
    return {
      isComplete: {
        inactive: false
      }
    };
  },
  methods: {
    complete() {
      this.isComplete.inactive = !this.isComplete.inactive;
    }
  }
});

// export default class Item extends Vue {}
</script>

<style scoped>
div {
  margin: 10px;
}

.inactive {
  color: #aaaaaa;
  text-decoration: line-through;
}
</style>
