<template>
  <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
    <dt class="text-sm font-medium text-gray-500">{{ label }}</dt>
    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
      <slot>
        <p v-if="Array.isArray(data)" class="uppercase-first-letter">
          <template
            v-for="(value_item, value_index) in data"
            :key="label + value_index"
          >
            {{ value_item }}
          </template>
        </p>
        <template v-else>{{ data }}</template>
      </slot>
    </dd>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    data: {
      type: [Array, String],
      default: null,
    },
  },
})
</script>
