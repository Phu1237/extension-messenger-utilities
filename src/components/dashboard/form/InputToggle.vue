<template>
  <!-- http://127.0.0.1:5500/components/application-ui/forms/toggles/#component-b99e1c97056ef7d294767c9def084f7b -->
  <div class="flex items-center">
    <button
      type="button"
      class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      :class="[checked ? 'bg-indigo-600' : 'bg-gray-200']"
      role="switch"
      :aria-checked="checked"
      :aria-labelledby="id + '-label'"
      @click="toggleChecked"
    >
      <span
        aria-hidden="true"
        class="pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
        :class="[checked ? 'translate-x-5' : 'translate-x-0']"
        @click="toggleChecked"
      />
    </button>
    <span :id="id + '-label'" class="ml-3">
      <span class="text-sm font-medium text-gray-900">
        {{ checked === true ? 'Enable' : 'Disable' }}
      </span>
    </span>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    subLabel: {
      type: String,
      default: '',
    },
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
