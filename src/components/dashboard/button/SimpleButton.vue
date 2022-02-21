<template>
  <button
    type="button"
    class="inline-flex justify-center items-center border font-medium rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
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
      size == 'sm' ? 'px-2.5 py-1.5 text-xs' : '',
      size == 'md' ? 'px-3 py-2 text-sm leading-4' : '',
      size == 'lg' ? 'px-4 py-2 text-sm' : '',
      size == 'xl' ? 'px-4 py-2 text-base' : '',
      size == '2xl' ? 'px-6 py-3 text-base' : '',
    ]"
  >
    <FontAwesomeIcon
      v-if="type == 'leading-icon' && icon"
      :icon="icon"
      :class="[
        size == 'sm' ? 'mr-1 h-4 w-4' : '',
        size == 'md' ? '-ml-0.5 mr-2 h-4 w-4' : '',
        size == 'lg' ? '-ml-1 mr-2 h-5 w-5' : '',
        size == 'xl' ? '-ml-1 mr-3 h-5 w-5' : '',
        size == '2xl' ? '-ml-1 mr-3 h-5 w-5' : '',
      ]"
    />
    <slot />
    <FontAwesomeIcon
      v-if="type == 'trailing-icon' && icon"
      :icon="icon"
      :class="[
        size == 'sm' ? 'ml-1 h-4 w-4' : '',
        size == 'md' ? 'ml-2 -mr-0.5  h-4 w-4' : '',
        size == 'lg' ? 'ml-2 -mr-1 h-5 w-5' : '',
        size == 'xl' ? 'ml-3 -mr-1 h-5 w-5' : '',
        size == '2xl' ? 'ml-3 -mr-1 h-5 w-5' : '',
      ]"
    />
  </button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    type: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: 'md',
    },
    icon: {
      type: Array,
      default: null,
    },
  },
})
</script>
