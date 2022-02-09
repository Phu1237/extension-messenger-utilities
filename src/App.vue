<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  mounted() {
    // Fetch storage into vuex
    this.$store.dispatch('storage/asyncFetch')
    // Open in new tab when click link
    this.$el.addEventListener('DOMContentLoaded', function () {
      var links = this.$el.getElementsByTagName('a')
      for (var i = 0; i < links.length; i++) {
        ;(function () {
          var ln = links[i]
          var location = ln.href
          ln.onclick = function () {
            chrome.tabs.create({ active: true, url: location })
          }
        })()
      }
    })
  },
})
</script>

<style lang="scss">
@import '@/assets/app.scss';
</style>
