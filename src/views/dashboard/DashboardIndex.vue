<template>
  <DescriptionList
    label="Application information"
    description="General information of application"
    :data="information"
    @action="action($event)"
  />
</template>

<script>
import { defineComponent } from 'vue'
import DescriptionList from '@/components/dashboard/DescriptionList.vue'

export default defineComponent({
  components: {
    DescriptionList,
  },
  data() {
    return {
      information: [
        {
          label: 'Version',
          value: this.app('version'),
          isBadge: true,
        },
        {
          label: 'Last Notification',
          value: '',
        },
        {
          label: 'Last Changelog',
          value: this.getChangelog(1)[0].changes,
        },
        {
          label: 'Last Extension Data Updated',
          value: '',
          action: 'Update Extension Data',
        },
      ],
    }
  },

  watch: {
    '_localStorage.notitication.message'(value) {
      this.information[1].value = value
    },
    '_localStorage.last_updated'(value) {
      this.information[3].value = this.convertUnixTimestamp(value || Date.now())
    },
  },
  created() {
    this.information[1].value = this._localStorage.notification.message
    this.information[3].value = this.convertUnixTimestamp(
      this._localStorage.last_updated
    )
  },
  methods: {
    action(data) {
      switch (data) {
        case 'update-extension-data':
          this.$store.commit('storage/setStorage', {
            storage: 'sync',
            data: {},
          })
          this.$store.commit('storage/setStorage', {
            storage: 'local',
            data: {},
          })

          this.fetchData()
          this.$store.dispatch('storage/fetch')
          break
      }
    },
  },
})
</script>
