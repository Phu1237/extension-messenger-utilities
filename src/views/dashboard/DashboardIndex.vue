<template>
  <DescriptionList
    label="Application information"
    description="General information of application"
    :data="information"
  />
</template>

<script>
import { defineComponent } from 'vue'
import DescriptionList from '../../components/dashboard/DescriptionList.vue'

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
          label: 'Last Changelog',
          value: this.getChangelog(1)[0].changes,
        },
        {
          label: 'Last Filter Updated',
          value: '',
        },
      ],
    }
  },
  computed: {
    lastFilterUpdated() {
      return this.convertUnixTimestamp(this._localStorage.filter_last_updated)
    },
  },
  created() {
    this.information[2].value = this.lastFilterUpdated
  },
})
</script>
