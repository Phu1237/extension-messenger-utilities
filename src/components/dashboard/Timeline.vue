<template>
  <ul role="list" class="divide-y divide-gray-200">
    <TimelineItem
      v-for="(item, index) in timeline"
      :key="'timeline-' + index"
      :label="item.label"
      :time="item.time"
    >
      <p
        class="uppercase-first-letter"
        v-for="(change, index) in item.changes"
        :key="'change-' + index"
      >
        {{ change }}
      </p>
    </TimelineItem>
  </ul>
</template>

<script>
import { defineComponent } from "vue";
import TimelineItem from "./TimelineItem.vue";

export default defineComponent({
  props: {
    timeline: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    TimelineItem,
  },
});
</script>
