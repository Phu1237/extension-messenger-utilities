<template>
  <font-awesome-icon
    :icon="['far', 'circle-question']"
    class="h-4"
    title="The style of hide item"
  />
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
      default: "",
    },
  },
};
</script>