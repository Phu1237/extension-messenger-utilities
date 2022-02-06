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
            checked
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
        <!-- <img
          class="inline-block h-4"
          src="../icons/svgs/info-with-circle.svg"
          title="The style of hide item"
        /> -->
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
            checked
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
      <div class="font-medium">
        Display type
        <!-- <img
          class="inline-block h-4"
          src="../icons/svgs/info-with-circle.svg"
          title="The event that when it triggers, the hide item will be unhide"
        /> -->
      </div>
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
            checked
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
    >
      Save
    </button>
    <button id="go-to-options">> Go to options page</button>
  </div>
</template>
