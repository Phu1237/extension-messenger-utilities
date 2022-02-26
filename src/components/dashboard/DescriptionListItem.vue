<template>
  <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
    <dt class="text-base font-medium text-gray-500">{{ label }}</dt>
    <dd class="mt-1 flex text-base text-gray-900 sm:mt-0 sm:col-span-2">
      <span class="flex-grow">
        <slot>
          <template v-if="Array.isArray(data)">
            <p
              v-for="(value_item, value_index) in data"
              :key="label + value_index"
              class="uppercase-first-letter"
            >
              {{ value_item }}
            </p>
          </template>
          <template v-else>{{ data }}</template>
        </slot>
      </span>
      <span class="ml-4 flex-shrink-0">
        <button
          type="button"
          class="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          @click="$emit('action', slug(action))"
        >
          {{ action }}
        </button>
      </span>
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
    action: {
      type: String,
      default: null,
    },
  },
  emits: ['action'],
  methods: {
    slug(text) {
      return text
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '')
    },
  },
})
</script>
