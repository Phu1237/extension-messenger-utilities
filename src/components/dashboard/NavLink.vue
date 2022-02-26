<template>
  <router-link
    :to="to"
    class="nav-link px-3 py-2 rounded-md text-base font-medium"
  >
    <slot />
  </router-link>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    to: {
      type: [String, Object],
      required: true,
    },
  },
})
</script>

<style lang="scss">
.nav-link {
  &.router-link-exact-active {
    @apply bg-gray-900 text-white;
  }
  &:not(.router-link-exact-active) {
    @apply text-gray-300 hover:bg-gray-700 hover:text-white;
  }
}
</style>
