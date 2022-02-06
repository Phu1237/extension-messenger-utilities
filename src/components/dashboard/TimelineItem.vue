<template>
  <li class="py-4">
    <div class="flex space-x-3">
      <span
        class="flex justify-center items-center h-10 w-10 rounded-full bg-green-500 text-white"
      >
        <FontAwesomeIcon :icon="['fas', 'clock-rotate-left']" />
      </span>
      <div class="flex-1 space-y-1">
        <div class="flex items-center justify-between">
          <h3 class="text-sm font-medium">{{ label }}</h3>
          <p class="text-sm text-gray-500">
            {{ formatDate(time, 'MMM Do YYYY') }}
          </p>
        </div>
        <p class="text-sm text-gray-500">
          <slot />
        </p>
      </div>
    </div>
  </li>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    label: {
      type: String,
      default: '',
    },
    time: {
      type: Date,
      default: '',
    },
  },
})
</script>
