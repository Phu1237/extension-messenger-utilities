<template>
  <label
    class="relative border p-4 flex cursor-pointer focus:outline-none"
    :class="[
      checked ? 'bg-indigo-50 border-indigo-200 z-10' : 'border-gray-200',
    ]"
    @click="$emit('input', value)"
  >
    <input
      type="radio"
      name="privacy-setting"
      value="Public access"
      class="
        h-4
        w-4
        mt-0.5
        cursor-pointer
        text-indigo-600
        border-gray-300
        focus:ring-indigo-500
      "
      aria-labelledby="privacy-setting-0-label"
      aria-describedby="privacy-setting-0-description"
      :checked="checked"
    />
    <div class="ml-3 flex flex-col">
      <!-- Checked: "text-indigo-900", Not Checked: "text-gray-900" -->
      <span
        id="privacy-setting-0-label"
        class="block text-sm font-medium"
        :class="checked ? 'text-indigo-900' : 'text-gray-900'"
      >
        {{ label }}
      </span>
      <!-- Checked: "text-indigo-700", Not Checked: "text-gray-500" -->
      <span
        id="privacy-setting-0-description"
        class="block text-sm"
        :class="checked ? 'text-indigo-700' : 'text-gray-500'"
      >
        {{ description }}
      </span>
    </div>
  </label>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
  },
});
</script>