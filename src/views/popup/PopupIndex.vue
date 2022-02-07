<template>
  <div class="p-1">
    <div
      id="alert"
      class="hidden p-1 rounded-md border border-gray-400 bg-green-300 text text-black"
    ></div>
    <div class="px-2">
      <div class="font-medium">Protect status</div>
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
            :checked="protect_status === 'disable'"
            @change="protect_status = 'disable'"
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
            :checked="protect_status === 'enable'"
            @change="protect_status = 'enable'"
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
      <div class="font-medium">
        Protect type
        <InformationIcon title="The style of hide item" />
      </div>
      <ul
        class="filter-switch inline-flex items-center relative h-10 p-1 space-x-1 bg-gray-300 rounded-md text-blue-600"
      >
        <li class="filter-switch-item flex relative h-8 bg-gray-300x">
          <input
            id="protect_type_none"
            name="protect_type"
            type="radio"
            class="sr-only"
            value="none"
            :checked="protect_type === 'none'"
            @change="protect_type = 'none'"
          />
          <label
            for="protect_type_none"
            class="h-8 py-1 px-2 bg-white text-sm leading-6 text-gray-600 hover:text-blue-600 rounded shadow"
          >
            None
          </label>
          <div aria-hidden="true" class="filter-active"></div>
        </li>
        <li class="filter-switch-item flex relative h-8 bg-gray-300x">
          <input
            id="protect_type_blur"
            name="protect_type"
            type="radio"
            class="sr-only"
            value="blur"
            :checked="protect_type === 'blur'"
            @change="protect_type = 'blur'"
          />
          <label
            for="protect_type_blur"
            class="h-8 py-1 px-2 bg-white text-sm leading-6 text-gray-600 hover:text-blue-600 rounded shadow"
          >
            Blur
          </label>
        </li>
        <li class="filter-switch-item flex relative h-8 bg-gray-300x">
          <input
            id="protect_type_reverse"
            name="protect_type"
            type="radio"
            class="sr-only"
            value="reverse"
            :checked="protect_type === 'reverse'"
            @change="protect_type = 'reverse'"
          />
          <label
            for="protect_type_reverse"
            class="h-8 py-1 px-2 bg-white text-sm leading-6 text-gray-600 hover:text-blue-600 rounded shadow"
          >
            Reverse
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
            :checked="display_type === 'none'"
            @click="display_type = 'none'"
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
            :checked="display_type === 'hover'"
            @click="display_type = 'hover'"
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
    <button
      id="save_btn"
      class="w-full mt-2 py-3 bg-blue-500 hover:bg-blue-700 focus:outline-none font-semibold text-white"
      @click="save"
    >
      Save
    </button>
    <button id="go-to-options" @click="goToDashboard">> Go to Dashboard</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import InformationIcon from '../../components/InformationIcon.vue'

export default defineComponent({
  components: { InformationIcon },
  data() {
    return {
      form: {
        protect_status: 'disable',
        protect_type: 'none',
        display_type: 'none',
      },
    }
  },
  computed: {
    protect_status: {
      get() {
        return this._syncStorage.protect_status
      },
      set(value) {
        this.form.protect_status = value
      },
    },
    protect_type: {
      get() {
        return this._syncStorage.protect_type
      },
      set(value) {
        this.form.protect_type = value
      },
    },
    display_type: {
      get() {
        return this._syncStorage.display_type
      },
      set(value) {
        this.form.display_type = value
      },
    },
  },
  methods: {
    save() {
      this.$store
        .dispatch('storage/set', {
          storage: 'sync',
          data: this.form,
        })
        .then(() => {
          this.$store.dispatch('storage/fetch')
          this.reinject()
        })
    },
    goToDashboard() {
      if (chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage()
      } else {
        window.open(chrome.runtime.getURL('index.html'))
      }
    },
  },
})
</script>
