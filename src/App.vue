<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  mounted() {
    this.$store.dispatch('storage/fetch').then(() => {
      console.log(this._syncStorage, this._localStorage)
      let update = true
      if (
        this._localStorage.filter &&
        this._localStorage['last_filter_updated']
      ) {
        const diff = Date.now() - this._localStorage['last_filter_updated']
        const limit_time = 60 * 60 * 24 // 1 day
        if (diff < limit_time) {
          update = false
        }
      }
      if (update) {
        this.fetchFilter()
      }
    })
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
