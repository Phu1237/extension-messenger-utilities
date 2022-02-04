<template>
  <!-- http://127.0.0.1:5500/components/application-ui/forms/radio-groups/#component-7b583a008c3fc62c0fe403d10ca042bb -->
  <fieldset>
    <template v-if="label !== ''">
      <legend class="text-base font-medium text-gray-900">
        {{ label }}
      </legend>
      <!-- <legend class="sr-only">Privacy setting</legend> -->
    </template>
    <div class="mt-4 bg-white rounded-md -space-y-px">
      <InputRadioItem
        v-for="(option, index) in options"
        :key="index"
        :checked="option.value === value"
        :label="option.label"
        :value="option.value"
        :description="option.description"
        :class="[
          index === 0 ? 'rounded-tl-md rounded-tr-md' : '',
          index === options.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
        ]"
        @input="$emit('input', $event)"
      />
    </div>
  </fieldset>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import InputRadioItem from '@/components/dashboard/InputRadioItem.vue'

export default defineComponent({
  components: {
    InputRadioItem,
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
})
</script>
