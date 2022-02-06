<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10">
      <div>
        <div
          id="label"
          class="text-base font-medium text-gray-900 sm:text-xl sm:text-gray-700"
        >
          About me
        </div>
        <div>
          <!-- This example requires Tailwind CSS v2.0+ -->
          <div class="bg-white py-5 border-b border-gray-200">
            <div
              class="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap"
            >
              <div class="ml-4 mt-4">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <img
                      class="h-12 w-12 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                      Phu1237
                    </h3>
                    <p class="text-sm text-gray-500">
                      <a href="#"> @tom_cook </a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="ml-4 mt-4 flex-shrink-0 flex">
                <button
                  type="button"
                  class="relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <!-- Heroicon name: solid/phone -->
                  <FontAwesomeIcon :icon="['fab', 'facebook']" />
                </button>
                <button
                  type="button"
                  class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <!-- Heroicon name: solid/mail -->
                  <FontAwesomeIcon :icon="['fab', 'github']" />
                </button>
                <button
                  type="button"
                  class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <!-- Heroicon name: solid/mail -->
                  <FontAwesomeIcon :icon="['fa', 'envelope']" />
                </button>
                <button
                  type="button"
                  class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <!-- Heroicon name: solid/mail -->
                  <FontAwesomeIcon :icon="['fab', 'linkedin']" />
                </button>
              </div>
            </div>
          </div>
          <ul role="list" class="divide-y divide-gray-200">
            <li>
              <a href="#" class="block hover:bg-gray-50">
                <div class="px-4 py-4 sm:px-6">
                  <div class="flex items-center justify-between">
                    <div class="text-sm font-medium text-indigo-600 truncate">
                      Back End Developer
                    </div>
                    <div class="ml-2 flex-shrink-0 flex">
                      <span
                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                      >
                        Full-time
                      </span>
                    </div>
                  </div>
                  <div class="mt-2 flex justify-between">
                    <div class="sm:flex">
                      <div class="flex items-center text-sm text-gray-500">
                        <svg
                          class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          x-description="Heroicon name: solid/users"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
                          ></path>
                        </svg>
                        Engineering
                      </div>
                    </div>
                    <div class="ml-2 flex items-center text-sm text-gray-500">
                      <svg
                        class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        x-description="Heroicon name: solid/location-marker"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Remote
                    </div>
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a href="#" class="block hover:bg-gray-50">
                <div class="px-4 py-4 sm:px-6">
                  <div class="flex items-center justify-between">
                    <div class="text-sm font-medium text-indigo-600 truncate">
                      Front End Developer
                    </div>
                    <div class="ml-2 flex-shrink-0 flex">
                      <span
                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                      >
                        Full-time
                      </span>
                    </div>
                  </div>
                  <div class="mt-2 flex justify-between">
                    <div class="sm:flex">
                      <div class="flex items-center text-sm text-gray-500">
                        <svg
                          class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          x-description="Heroicon name: solid/users"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
                          ></path>
                        </svg>
                        Engineering
                      </div>
                    </div>
                    <div class="ml-2 flex items-center text-sm text-gray-500">
                      <svg
                        class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        x-description="Heroicon name: solid/location-marker"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Remote
                    </div>
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a href="#" class="block hover:bg-gray-50">
                <div class="px-4 py-4 sm:px-6">
                  <div class="flex items-center justify-between">
                    <div class="text-sm font-medium text-indigo-600 truncate">
                      User Interface Designer
                    </div>
                    <div class="ml-2 flex-shrink-0 flex">
                      <span
                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                      >
                        Full-time
                      </span>
                    </div>
                  </div>
                  <div class="mt-2 flex justify-between">
                    <div class="sm:flex">
                      <div class="flex items-center text-sm text-gray-500">
                        <svg
                          class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          x-description="Heroicon name: solid/users"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
                          ></path>
                        </svg>
                        Design
                      </div>
                    </div>
                    <div class="ml-2 flex items-center text-sm text-gray-500">
                      <svg
                        class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        x-description="Heroicon name: solid/location-marker"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Remote
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <!-- This example requires Tailwind CSS v2.0+ -->
        <div
          id="label"
          class="text-base font-medium text-gray-900 sm:text-xl sm:text-gray-700"
        >
          Changelog (Last 5 versions)
        </div>
        <!-- This example requires Tailwind CSS v2.0+ -->
        <div>
          <TimeLine :timeline="changelog" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import TimeLine from '@/components/dashboard/Timeline.vue'

export default defineComponent({
  components: {
    TimeLine,
  },
  computed: {
    storage() {
      return this.$store.state.storage.storage
    },
    changelog() {
      return this.getChangelog(5)
    },
  },
  created() {
    this.$store.dispatch('storage/getStorage')
  },
})
</script>
