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
          value: this.manifest('version'),
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
  computed: {
    notification() {
      return this._localStorage.notification
    },
    last_update() {
      return this.convertUnixTimestamp(this._localStorage.last_updated)
    },
  },
  watch: {
    'notification.message'(new_value) {
      this.information[1].value = new_value
    },
    last_update(new_value) {
      this.information[3].value = new_value
    },
  },
  created() {
    this.information[1].value = this.notification.message
    this.information[3].value = this.last_update
  },
  methods: {
    action(data) {
      switch (data) {
        case 'update-extension-data':
          this.fetchData()
          break
      }
    },
  },
})
</script>
