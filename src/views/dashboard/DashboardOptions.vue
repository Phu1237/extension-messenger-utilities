<template>
  <div class="space-y-8 divide-y divide-gray-200">
    <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
      <div>
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">Protect</h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            We'll always let you know about important changes, but you pick what
            else you want to hear about.
          </p>
        </div>
        <div class="mt-6 space-y-6 sm:space-y-5">
          <div>
            <FormGroup id="protect_type" label="Protect type">
              <InputToggle
                :checked="protect_status"
                @input="protect_status = !protect_status"
              />
            </FormGroup>
          </div>
          <div class="pt-6 sm:pt-5">
            <FormGroup
              :id="description.protect_type.name"
              :label="description.protect_type.label"
            >
              <InputRadioField
                :options="description.protect_type.value"
                :value="protect_type"
                @input="protect_type = String($event)"
              />
            </FormGroup>
          </div>
          <div class="pt-6 sm:pt-5">
            <FormGroup id="display_type" label="Display type">
              <InputRadio
                :options="description.display_type.value"
                :value="display_type"
                @input="display_type = String($event)"
              />
            </FormGroup>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-5">
      <div class="flex justify-end">
        <button
          class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cancel
        </button>
        <button
          class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          @click="save"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { default_sync_storage } from '@/core/storage-description'
import FormGroup from '@/components/dashboard/form/FormGroup.vue'
import InputRadio from '@/components/dashboard/form/radio/StackedCards.vue'
import InputToggle from '@/components/dashboard/InputToggle.vue'
import InputRadioField from '@/components/dashboard/InputRadioField.vue'

export default defineComponent({
  components: {
    FormGroup,
    InputRadio,
    InputToggle,
    InputRadioField,
  },
  data() {
    return {
      protect_status: null,
      protect_type: null,
      display_type: null,
      description: default_sync_storage,
    }
  },
  created() {
    this.protect_status = this._syncStorage.protect_status
    this.protect_type = this._syncStorage.protect_type
    this.display_type = this._syncStorage.display_type
  },
  methods: {
    save() {
      console.log('save')
    },
  },
})
</script>
