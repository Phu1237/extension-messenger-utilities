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
          label: 'Last Extension Data Updated',
          value: '',
          action: 'Update',
        },
      ],
    }
  },
  computed: {
    last_data_updated() {
      return this.convertUnixTimestamp(this._localStorage.last_updated)
    },
  },
  created() {
    this.information[2].value = this.last_data_updated
  },
  methods: {
    action(data) {
      switch (data) {
        case 'updateData':
          this.$store.commit('storage/setStorage', {
            storage: 'sync',
            data: null,
          })
          this.$store.commit('storage/setStorage', {
            storage: 'local',
            data: null,
          })

          this.fetchData()
          this.$store.dispatch('storagefetch')
          break
      }
    },
  },
})
</script>
