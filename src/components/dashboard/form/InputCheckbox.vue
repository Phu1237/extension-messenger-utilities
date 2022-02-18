<template>
  <!-- http://127.0.0.1:5500/components/application-ui/forms/checkboxes/#component-f03fb959d6ba814eb987d39ae40961f0 -->
  <fieldset class="space-y-5">
    <template v-if="label !== ''">
      <legend class="text-sm text-gray-900">{{ label }}</legend>
    </template>
    <div
      v-for="(option, index) in options"
      :key="index"
      class="relative flex items-start"
    >
      <div class="flex items-center h-5">
        <input
          :id="option.name"
          v-model="checked"
          :aria-describedby="option.name + '-description'"
          :name="id"
          :value="option.name"
          type="checkbox"
          class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
      </div>
      <div class="ml-3 text-sm">
        <label :for="option.name" class="font-medium text-gray-700">
          {{ option.label }}
        </label>
        <p :id="option.name + '-description'" class="text-gray-500">
          {{ option.description }}
        </p>
      </div>
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
      type: Array,
      required: true,
    },
    options: {
      type: Object,
      required: true,
    },
  },
  emits: ['input'],
  computed: {
    checked: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
})
</script>
