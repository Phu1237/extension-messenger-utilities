<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    _syncStorage() {
      return this.$store.state.storage.sync
    },
    _localStorage() {
      return this.$store.state.storage.local
    },
  },
  mounted() {
    this.$store.dispatch('storage/fetch').then(() => {
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
  },
})
</script>

<style lang="scss">
@import '@/assets/app.scss';
</style>
