<template>
  <div>
    <p v-for="(item, index) in storage" :key="index">
      {{ item }}
    </p>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  created() {
    this.$store.dispatch("getStorage");
  },
  computed: {
    storage() {
      return this.$store.state.storage;
    },
  },
});
</script>