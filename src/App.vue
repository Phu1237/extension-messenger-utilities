<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  beforeCreate() {
    // Fetch storage into vuex
    this.$store.dispatch('storage/fetch')
  },
})
</script>

<style lang="scss">
@import '@/assets/app.scss';
</style>
