<template>
  <!--
      Checked: "border-transparent", Not Checked: "border-gray-300"
      Active: "ring-2 ring-indigo-500"
    -->
  <label
    class="
      relative
      bg-white
      border
      rounded-lg
      shadow-sm
      p-4
      flex
      cursor-pointer
      focus:outline-none
    "
    :class="[
      checked ? 'border-transparent ring-2 ring-indigo-500' : 'border-gray-300',
    ]"
    @click="$emit('input', value)"
  >
    <input
      type="radio"
      name="project-type"
      value="Newsletter"
      class="sr-only"
      aria-labelledby="project-type-0-label"
      aria-describedby="project-type-0-description-0 project-type-0-description-1"
    />
    <div class="flex-1 flex">
      <div class="flex flex-col">
        <span
          id="project-type-0-label"
          class="block text-sm font-medium text-gray-900"
        >
          {{ label }}
        </span>
        <span
          id="project-type-0-description-0"
          class="mt-1 flex items-center text-sm text-gray-500"
        >
          {{ description }}
        </span>
        <span
          id="project-type-0-description-1"
          class="mt-6 text-sm font-medium text-gray-900"
        >
          621 users
        </span>
      </div>
    </div>
    <!--
        Not Checked: "invisible"

        Heroicon name: solid/check-circle
      -->
    <svg
      v-if="checked"
      class="h-5 w-5 text-indigo-600"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clip-rule="evenodd"
      />
    </svg>
    <!--
        Active: "border", Not Active: "border-2"
        Checked: "border-indigo-500", Not Checked: "border-transparent"
      -->
    <div
      class="absolute -inset-px rounded-lg pointer-events-none"
      :class="[
        checked ? 'border border-indigo-500' : 'border-2 border-transparent',
      ]"
      aria-hidden="true"
    ></div>
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