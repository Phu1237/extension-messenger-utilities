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
            <FormGroup
              :id="description.protect_status.name"
              :label="description.protect_status.label"
            >
              <InputToggle
                :checked="form.protect_status"
                @input="form.protect_status = !form.protect_status"
              />
            </FormGroup>
          </div>
          <div class="pt-6 sm:pt-5">
            <FormGroup
              :id="description.protect_type.name"
              :label="description.protect_type.label"
            >
              <InputRadio
                :id="description.protect_type.name"
                :label="description.protect_type.description"
                :value="form.protect_type"
                :options="description.protect_type.options"
                @input="form.protect_type = String($event)"
              />
            </FormGroup>
          </div>
          <div class="pt-6 sm:pt-5">
            <FormGroup
              :id="description.protect_items.name"
              :label="description.protect_items.label"
            >
              <InputCheckbox
                :id="description.protect_items.name"
                :label="description.protect_items.description"
                :value="objectToArray(form.protect_items)"
                :options="description.protect_items.options"
                @input="form.protect_items = arrayToObject($event)"
              />
            </FormGroup>
          </div>
          <div class="pt-6 sm:pt-5">
            <FormGroup
              :id="description.display_type.name"
              :label="description.display_type.label"
            >
              <InputRadio
                :id="description.display_type.name"
                :label="description.display_type.description"
                :value="form.display_type"
                :options="description.display_type.options"
                @input="form.display_type = String($event)"
              />
            </FormGroup>
          </div>
        </div>
      </div>
      <!-- Hide chat -->
      <div class="pt-6 space-y-6 sm:pt-5 sm:space-y-5">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">Hide chat</h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            We'll always let you know about important changes, but you pick what
            else you want to hear about.
          </p>
        </div>
        <div class="mt-6 space-y-6 sm:space-y-5">
          <div>
            <FormGroup id="hide_status" label="Hide status">
              <InputToggle
                :checked="form.hide_status"
                @input="form.hide_status = !form.hide_status"
              />
            </FormGroup>
          </div>
          <div class="pt-6 sm:pt-5">
            <FormGroup
              :id="description.hide_list.name"
              :label="description.hide_list.label"
            >
              <SimpleTextarea
                :id="description.hide_list.name"
                :label="description.hide_list.description"
                :placeholder="description.hide_list.placeholder"
                :value="form.hide_list"
                @input="form.hide_list = $event"
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
import InputToggle from '@/components/dashboard/form/InputToggle.vue'
import InputRadio from '@/components/dashboard/form/InputRadio.vue'
import InputCheckbox from '@/components/dashboard/form/InputCheckbox.vue'
import SimpleTextarea from '@/components/dashboard/form/SimpleTextarea.vue'

export default defineComponent({
  components: {
    FormGroup,
    InputToggle,
    InputRadio,
    InputCheckbox,
    SimpleTextarea,
  },
  data() {
    return {
      form: {
        protect_status: null,
        protect_type: null,
        protect_items: null,
        display_type: null,
        hide_status: null,
        hide_list: null,
      },
      description: default_sync_storage,
    }
  },
  created() {
    this.form.protect_status = this._syncStorage.protect_status
    this.form.protect_type = this._syncStorage.protect_type
    this.form.protect_items = this._syncStorage.protect_items
    this.form.display_type = this._syncStorage.display_type
    this.form.hide_status = this._syncStorage.hide_status
    this.form.hide_list = this._syncStorage.hide_list
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
          this.$toast.success('Saved!')
          this.reinject()
        })
        .catch((err) => {
          this.$toast.error(err)
          console.error(err)
        })
    },
  },
})
</script>
