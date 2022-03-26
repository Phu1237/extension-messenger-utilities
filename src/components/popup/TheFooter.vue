<template>
  <footer>
    <div>
      <div class="bg-blue-600">
        <div class="max-w-7xl mx-auto py-2 px-2 sm:px-4 lg:px-6">
          <div class="flex items-center justify-between flex-wrap">
            <div class="w-0 flex-1 flex items-center">
              <span class="flex p-2 rounded-lg bg-blue-800 text-white">
                <FontAwesomeIcon :icon="['fas', 'star']" />
              </span>
              <p class="ml-3 font-medium text-white truncate">
                <span>More options?</span>
              </p>
            </div>
            <div class="order-3 flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
              <button
                class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50"
                @click="goToDashboard"
              >
                <FontAwesomeIcon
                  :icon="['fas', 'arrow-up-right-from-square']"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between px-2">
      Author: Phu1237
      <span id="version">v{{ manifest('version') }}</span>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    goToDashboard() {
      if (chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage()
      } else {
        window.open(chrome.runtime.getURL('dashboard.html'))
      }
    },
  },
})
</script>

<style lang="scss">
footer {
  a {
    color: #fff;
  }
}
</style>
