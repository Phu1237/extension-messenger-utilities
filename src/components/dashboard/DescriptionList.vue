<template>
  <div>
    <h3 class="text-lg leading-6 font-medium text-gray-900">
      {{ label }}
    </h3>
    <p class="mt-1 max-w-2xl text-sm text-gray-500">
      {{ description }}
    </p>
  </div>
  <div class="mt-5 border-t border-gray-200">
    <dl class="sm:divide-y sm:divide-gray-200">
      <DescriptionListItem
        v-for="(item, index) in data"
        :key="index"
        :label="item.label"
        :data="item.value"
        :action="item.action"
        @action="$emit('action', $event)"
      >
        <template v-if="item.isBadge">
          <span
            class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800"
          >
            <svg
              class="-ml-1 mr-1.5 h-2 w-2 text-green-400"
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cx="4" cy="4" r="3" />
            </svg>
            {{ item.value }}
          </span>
        </template>
      </DescriptionListItem>
    </dl>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import DescriptionListItem from './DescriptionListItem.vue'

export default defineComponent({
  components: {
    DescriptionListItem,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: null,
    },
    data: {
      type: Array,
      required: true,
    },
  },
  emits: ['action'],
})
</script>
