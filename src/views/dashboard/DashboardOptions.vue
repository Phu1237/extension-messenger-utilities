<template>
  <form class="space-y-8 divide-y divide-gray-200">
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
                :checked="protect_status.value"
                @input="protect_status.value = !protect_status.value"
              />
            </FormGroup>
          </div>
          <div class="pt-6 sm:pt-5">
            <FormGroup id="protect_type" label="Protect type">
              <InputRadioField
                :options="protect_type.options"
                :value="protect_type.value"
                @input="protect_type.value = String($event)"
              />
            </FormGroup>
          </div>
          <div class="pt-6 sm:pt-5">
            <FormGroup id="display_type" label="Display type">
              <!-- <InputRadioField
                label="ABC"
                :options="display_type.options"
                :value="display_type.value"
                @updateValue="display_type.value = $event"
              /> -->
              <InputRadio
                :options="display_type.options"
                :value="display_type.value"
                @input="display_type.value = String($event)"
              />
            </FormGroup>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-5">
      <div class="flex justify-end">
        <button
          type="button"
          class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { defineComponent } from 'vue'
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
      protect_status: {
        value: true,
      },
      protect_type: {
        value: 'blur',
        options: [
          {
            label: 'None',
            value: 'none',
            description: 'None',
          },
          {
            label: 'Blur',
            value: 'blur',
            description: 'Blur',
          },
          {
            label: 'Reverse',
            value: 'reverse',
            description: 'Reverse',
          },
        ],
      },
      display_type: {
        value: 'none',
        options: [
          {
            label: 'None',
            value: 'none',
            description: 'None',
          },
          {
            label: 'Hover',
            value: 'hover',
            description: 'Hover',
          },
        ],
      },
    }
  },
})
</script>
