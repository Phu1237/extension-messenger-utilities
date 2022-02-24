<template>
  <!-- http://127.0.0.1:5500/components/application-ui/forms/radio-groups/#component-7b583a008c3fc62c0fe403d10ca042bb -->
  <fieldset>
    <template v-if="label !== ''">
      <legend class="text-base text-gray-900">{{ label }}</legend>
    </template>
    <div class="mt-4 bg-white rounded-md -space-y-px">
      <input
        :id="id"
        type="range"
        step="5"
        class="appearance-none w-full h-6 p-0 bg-indigo-50"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
    </div>
  </fieldset>
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
    value: {
      type: Number,
      required: true,
    },
  },
  emits: ['input'],
})
</script>
