<template>
  <div class="flex items-center">
    <button
      type="button"
      class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      :class="[checked ? 'bg-indigo-600' : 'bg-gray-200']"
      role="switch"
      :aria-checked="checked"
      aria-labelledby="annual-billing-label"
      @click="toggleChecked"
    >
      <span
        aria-hidden="true"
        class="pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
        :class="[checked ? 'translate-x-5' : 'translate-x-0']"
        @click="toggleChecked"
      />
    </button>
    <span id="annual-billing-label" class="ml-3">
      <span class="text-sm font-medium text-gray-900">Annual billing </span>
      <span class="text-sm text-gray-500">(Save 10%)</span>
    </span>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['input'],
  methods: {
    toggleChecked() {
      this.$emit('input', !this.checked)
    },
  },
})
</script>
