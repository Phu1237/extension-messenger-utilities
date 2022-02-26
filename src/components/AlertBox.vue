<template>
  <!-- http://127.0.0.1:5500/components/application-ui/feedback/alerts/#component-2839a6e6678180cc64af7d5a1c96dae2 -->
  <div class="border-l-4 py-2 px-4" :class="[borderColor(), backgroundColor()]">
    <div class="flex">
      <div class="flex-shrink-0">
        <FontAwesomeIcon :icon="icon()" :class="[textColor()]" />
      </div>
      <div class="ml-3">
        <p class="text-base font-medium" :class="[textColor()]">
          {{ message }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'info',
    },
    message: {
      type: String,
      default: '',
    },
  },
  emits: ['close'],
  methods: {
    borderColor() {
      switch (this.type) {
        case 'info':
          return 'border-blue-400'
        case 'success':
          return 'border-green-400'
        case 'warning':
          return 'border-orange-400'
        case 'error':
          return 'border-red-400'
        default:
          return 'border-gray-400'
      }
    },
    backgroundColor() {
      switch (this.type) {
        case 'info':
          return 'bg-blue-50'
        case 'success':
          return 'bg-green-50'
        case 'warning':
          return 'bg-orange-50'
        case 'error':
          return 'bg-red-50'
        default:
          return 'bg-blue-50'
      }
    },
    textColor() {
      switch (this.type) {
        case 'info':
          return 'text-blue-700'
        case 'success':
          return 'text-green-700'
        case 'warning':
          return 'text-orange-700'
        case 'error':
          return 'text-red-700'
        default:
          return 'text-blue-700'
      }
    },
    icon() {
      switch (this.type) {
        case 'info':
          return ['fas', 'circle-info']
        case 'success':
          return ['fas', 'circle-check']
        case 'warning':
          return ['fas', 'fa-triangle-exclamation']
        case 'error':
          return ['fas', 'fa-xmark']
        default:
          return ['fas', 'info']
      }
    },
    close() {
      this.$emit('close')
    },
  },
})
</script>
