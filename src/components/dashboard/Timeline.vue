<template>
  <ul role="list" class="divide-y divide-gray-200">
    <TimeLineItem
      v-for="(item, index) in timeline"
      :key="'timeline-' + index"
      :label="item.label"
      :time="item.time"
    >
      <p
        v-for="(change, change_index) in item.changes"
        :key="'change-' + change_index"
        class="uppercase-first-letter"
      >
        {{ change }}
      </p>
    </TimeLineItem>
  </ul>
</template>

<script>
import { defineComponent } from 'vue'
import TimeLineItem from './TimeLineItem.vue'

export default defineComponent({
  components: {
    TimeLineItem,
  },
  props: {
    timeline: {
      type: Array,
      default: () => [],
    },
  },
})
</script>
