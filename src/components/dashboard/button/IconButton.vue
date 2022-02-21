<template>
  <button
    type="button"
    class="inline-flex items-center border rounded-full shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
    :class="[
      color == 'primary'
        ? 'border-transparent bg-primary hover:bg-primary-hover focus:ring-primary-ring text-primary-text'
        : '',
      color == 'secondary'
        ? 'border-transparent bg-secondary hover:bg-secondary-hover focus:ring-secondary-ring text-secondary-text'
        : '',
      color == 'white'
        ? 'border-gray-300 bg-white hover:bg-white-hover focus:ring-white-ring text-white-text'
        : '',
      size == 'sm' ? 'p-1' : '',
      size == 'md' ? 'p-1.5' : '',
      size == 'lg' ? 'p-2' : '',
      size == 'xl' ? 'p-2' : '',
      size == '2xl' ? 'p-3' : '',
    ]"
  >
    <!-- Heroicon name: solid/plus-sm -->
    <FontAwesomeIcon
      :icon="icon"
      :class="[
        size == 'sm' ? 'h-5 w-5' : '',
        size == 'md' ? 'h-5 w-5' : '',
        size == 'lg' ? 'h-5 w-5' : '',
        size == 'xl' ? 'h-6 w-6' : '',
        size == '2xl' ? 'h-6 w-6' : '',
      ]"
    />
  </button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    color: {
      type: String,
      default: 'white',
    },
    size: {
      type: String,
      default: 'md',
    },
    icon: {
      type: Array,
      required: true,
    },
  },
})
</script>
