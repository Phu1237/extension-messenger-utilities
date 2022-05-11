<template>
  <div role="group" aria-labelledby="'label-'+id">
    <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
      <div>
        <div
          :id="'label-' + id"
          class="text-base font-medium text-gray-900 sm:text-gray-700"
        >
          {{ label }}
        </div>
        <template v-if="label !== ''">
            <legend class="text-sm text-gray-900" v-html="description" />
        </template>
      </div>
      <div class="mt-4 sm:mt-0 sm:col-span-2">
        <div class="max-w-lg space-y-4">
          <slot />
        </div>
      </div>
    </div>
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
        required: true,
    },
    description: {
        type: String,
        required: false,
    }
  },
})
</script>
