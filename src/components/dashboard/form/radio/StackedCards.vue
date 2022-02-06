<template>
  <fieldset>
    <legend v-if="label !== ''" class="text-base font-medium text-gray-900">
      {{ label }}
    </legend>

    <div
      class="grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4"
      :class="label !== '' ? 'mt-4 ' : ''"
    >
      <StackedCardsItem
        v-for="(option, index) in options"
        :key="index"
        :checked="option.value === value"
        :label="option.label"
        :value="option.value"
        :description="option.description"
        @input="$emit('input', $event)"
      />
    </div>
  </fieldset>
</template>

<script>
import { defineComponent } from 'vue'
import StackedCardsItem from './StackedCardsItem.vue'

export default defineComponent({
  components: {
    StackedCardsItem,
  },
  props: {
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
})
</script>
