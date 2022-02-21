<template>
  <!-- http://127.0.0.1:5500/components/application-ui/forms/radio-groups/#component-7b583a008c3fc62c0fe403d10ca042bb -->
  <fieldset>
    <template v-if="label !== ''">
      <legend class="text-sm text-gray-900">{{ label }}</legend>
    </template>
    <div class="mt-4 bg-white rounded-md -space-y-px">
      <label
        v-for="(option, index) in options"
        :key="index"
        class="relative border p-4 flex cursor-pointer focus:outline-none"
        :class="[
          index === 0 ? 'rounded-tl-md rounded-tr-md' : '',
          index === options.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
          option.value === value
            ? 'bg-indigo-50 border-indigo-200 z-10'
            : 'border-gray-200',
        ]"
        @click="$emit('input', value)"
      >
        <input
          v-model="checked"
          type="radio"
          :name="id"
          :value="option.name"
          class="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500"
          :aria-labelledby="id + '-' + option.name + '-label'"
          :aria-describedby="id + '-' + option.name + '-description'"
        />
        <div class="ml-3 flex flex-col">
          <span
            :id="id + '-' + option.name + '-label'"
            class="block text-sm font-medium"
            :class="[
              option.name == value ? 'text-indigo-900' : 'text-gray-900',
            ]"
          >
            {{ option.label }}
          </span>
          <span
            :id="id + '-' + option.name + '-description'"
            class="block text-sm"
            :class="[checked ? 'text-indigo-700' : 'text-gray-500']"
          >
            {{ option.description }}
          </span>
        </div>
      </label>
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
      type: String,
      required: true,
    },
    options: {
      type: [Array, Object],
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
