<template>
  <div class="p-1">
    <Alert v-if="alert.message" :type="alert.type" :message="alert.message" />
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="relative">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-gray-300"></div>
      </div>
      <div class="relative flex justify-center">
        <span class="px-2 bg-white text-gray-500">Protect privacy</span>
      </div>
    </div>
    <div class="px-2">
      <div class="font-medium">Protect privacy</div>
      <ul
        class="filter-switch inline-flex items-center relative h-10 p-1 space-x-1 bg-gray-300 rounded-md text-blue-600"
      >
        <li class="filter-switch-item flex relative h-8 bg-gray-300">
          <input
            id="protect_status_disable"
            name="protect_status"
            type="radio"
            class="sr-only"
            value="disable"
            :checked="!form.protect_status"
            @change="form.protect_status = false"
          />
          <label
            for="protect_status_disable"
            class="h-8 py-1 px-2 bg-white text-sm leading-6 text-gray-600 hover:text-blue-600 rounded shadow"
          >
            Disable
          </label>
          <div aria-hidden="true" class="filter-active"></div>
        </li>
        <li class="filter-switch-item flex relative h-8 bg-gray-300x">
          <input
            id="protect_status_enable"
            name="protect_status"
            type="radio"
            class="sr-only"
            value="enable"
            :checked="form.protect_status"
            @change="form.protect_status = true"
          />
          <label
            for="protect_status_enable"
            class="h-8 py-1 px-2 bg-white text-sm leading-6 text-gray-600 hover:text-blue-600 rounded shadow"
          >
            Enable
          </label>
        </li>
      </ul>
    </div>
    <div class="px-2">
      <div class="font-medium">Display type</div>
      <ul
        class="filter-switch inline-flex items-center relative h-10 p-1 space-x-1 bg-gray-300 rounded-md text-blue-600"
      >
        <li class="filter-switch-item flex relative h-8 bg-gray-300x">
          <input
            id="display_type_none"
            name="display_type"
            type="radio"
            class="sr-only"
            value="none"
            :checked="form.display_type === 'none'"
            @click="form.display_type = 'none'"
          />
          <label
            for="display_type_none"
            class="h-8 py-1 px-2 bg-white text-sm leading-6 text-gray-600 hover:text-blue-600 rounded shadow"
          >
            None
          </label>
          <div aria-hidden="true" class="filter-active"></div>
        </li>
        <li class="filter-switch-item flex relative h-8 bg-gray-300x">
          <input
            id="display_type_hover"
            name="display_type"
            type="radio"
            class="sr-only"
            value="hover"
            :checked="form.display_type === 'hover'"
            @click="form.display_type = 'hover'"
          />
          <label
            for="display_type_hover"
            class="h-8 py-1 px-2 bg-white text-sm leading-6 text-gray-600 hover:text-blue-600 rounded shadow"
          >
            Hover
          </label>
        </li>
      </ul>
    </div>
    <!--  -->
    <div class="relative">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-gray-300"></div>
      </div>
      <div class="relative flex justify-center">
        <span class="px-2 bg-white text-gray-500">Hide chat</span>
      </div>
    </div>

    <div class="px-2">
      <div class="font-medium">Hide chat</div>
      <ul
        class="filter-switch inline-flex items-center relative h-10 p-1 space-x-1 bg-gray-300 rounded-md text-blue-600"
      >
        <li class="filter-switch-item flex relative h-8 bg-gray-300">
          <input
            id="hide_status_disable"
            name="hide_status"
            type="radio"
            class="sr-only"
            value="disable"
            :checked="!form.hide_status"
            @change="form.hide_status = false"
          />
          <label
            for="hide_status_disable"
            class="h-8 py-1 px-2 bg-white text-sm leading-6 text-gray-600 hover:text-blue-600 rounded shadow"
          >
            Disable
          </label>
          <div aria-hidden="true" class="filter-active"></div>
        </li>
        <li class="filter-switch-item flex relative h-8 bg-gray-300x">
          <input
            id="hide_status_enable"
            name="hide_status"
            type="radio"
            class="sr-only"
            value="enable"
            :checked="form.hide_status"
            @change="form.hide_status = true"
          />
          <label
            for="hide_status_enable"
            class="h-8 py-1 px-2 bg-white text-sm leading-6 text-gray-600 hover:text-blue-600 rounded shadow"
          >
            Enable
          </label>
        </li>
      </ul>
    </div>

    <button
      id="save_btn"
      class="w-full mt-2 py-3 bg-blue-500 hover:bg-blue-700 focus:outline-none font-semibold text-white"
      @click="save"
    >
      Save
    </button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Alert from '@/components/Alert.vue'

export default defineComponent({
  components: {
    Alert,
  },
  data() {
    return {
      alert: {
        type: '',
        message: '',
      },
      form: {
        protect_status: null,
        display_type: null,
        hide_status: null,
      },
    }
  },
  created() {
    this.form.protect_status = this._syncStorage.protect_status
    this.form.display_type = this._syncStorage.display_type
    this.form.hide_status = this._syncStorage.hide_status
  },
  methods: {
    pushAlert(type, message) {
      this.alert.type = type
      this.alert.message = message
    },
    save() {
      this.$store
        .dispatch('storage/set', {
          storage: 'sync',
          data: this.form,
        })
        .then(() => {
          this.$store.dispatch('storage/fetch')
          this.pushAlert('success', 'Saved')
          this.reinject()
        })
        .catch((err) => {
          this.pushAlert('error', err.message)
        })
    },
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
