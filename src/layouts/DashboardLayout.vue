<template>
  <div class="min-h-full">
    <div class="bg-gray-800 pb-32">
      <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="border-b border-gray-700">
            <div class="flex items-center justify-between h-16 px-4 sm:px-0">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <img class="h-8 w-8" src="/icons/icon.png" alt="Workflow" />
                </div>
                <div class="hidden md:block">
                  <div class="ml-10 flex items-baseline space-x-4">
                    <NavLink :to="{ name: 'dashboard' }" exact>
                      Dashboard
                    </NavLink>
                    <NavLink :to="{ name: 'options' }">Options</NavLink>
                    <NavLink :to="{ name: 'about' }">About</NavLink>
                    <button
                      class="text-white font-medium"
                      @click="openDonationModal"
                    >
                      🎉 Buy me a coffee ☕
                    </button>
                    <a
                      v-if="isDev"
                      :href="đata_export_url"
                      download="messenger-utilities.json"
                      class="text-white font-medium"
                    >
                      ⬇️ Export Data
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div id="mobile-menu" class="border-b border-gray-700 md:hidden">
          <div class="px-2 py-3 space-y-1 sm:px-3">
            <NavLink :to="{ name: 'dashboard' }" exact>Dashboard</NavLink>
            <NavLink :to="{ name: 'options' }">Options</NavLink>
            <NavLink :to="{ name: 'about' }">About</NavLink>
            <button class="text-white font-medium" @click="openDonationModal">
              🎉 Buy me a coffee ☕
            </button>
          </div>
        </div>
      </nav>
      <NotificationBox
        :notification="notification"
        :closed="notification_closed"
        :time="notification_time"
      />
      <header class="py-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-white">{{ title() }}</h1>
        </div>
      </header>
    </div>

    <main class="-mt-32">
      <div class="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
          <router-view />
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>
  <DonationModal v-if="is_donation_modal_open" @close="closeDonationModal" />
</template>

<script>
import dataJson from '@/core/messenger-utilities.js'
import NavLink from '@/components/dashboard/NavLink.vue'
import NotificationBox from '@/components/dashboard/NotificationBox.vue'
import DonationModal from '@/components/DonationModal.vue'

export default {
  components: {
    NavLink,
    NotificationBox,
    DonationModal,
  },
  data() {
    return {
      notification: null,
      notification_closed: false,
      notification_time: null,
      is_donation_modal_open: false,
      isDev: import.meta.env.DEV,
    }
  },
  computed: {
    đata_export_url() {
      let str = JSON.stringify(dataJson)
      //Save the file contents as a DataURI
      return 'data:application/json;charset=utf-8,' + encodeURIComponent(str)
    },
  },
  created() {
    this.notification = this._localStorage.notification
    this.notification_closed = this._localStorage.notification_closed
    this.notification_time = this._localStorage.notification_time
  },
  methods: {
    title() {
      return this.$route.meta.title || 'Dashboard'
    },
    openDonationModal() {
      this.is_donation_modal_open = true
    },
    closeDonationModal() {
      this.is_donation_modal_open = false
    },
  },
}
</script>
