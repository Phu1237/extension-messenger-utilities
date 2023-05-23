<template>
  <div class="space-y-8 divide-y divide-gray-200">
    <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
      <div>
        <div>
          <h2 class="text-lg leading-6 font-medium text-gray-900">Protect</h2>
          <p class="mt-1 max-w-2xl text-base text-gray-500">
            Protect your privacy by prevent content from being shown when you
            are unwanted.
          </p>
        </div>
        <div class="mt-6 space-y-6 sm:space-y-5">
          <div>
            <FormGroup
              :id="description.protect_status.name"
              :label="description.protect_status.label"
              :description="description.protect_status.description"
            >
              <InputToggle
                :id="description.protect_status.name"
                :checked="form.protect_status"
                @input="form.protect_status = !form.protect_status"
              />
            </FormGroup>
          </div>
          <div class="pt-6 sm:pt-5">
            <FormGroup
              :id="description.protect_type.name"
              :label="description.protect_type.label"
              :description="description.protect_type.description"
            >
              <InputRadio
                :id="description.protect_type.name"
                :value="form.protect_type"
                :options="description.protect_type.options"
                @input="form.protect_type = String($event)"
              />
            </FormGroup>
          </div>
          <div class="pt-6 sm:pt-5">
            <FormGroup
              :id="description.protect_domains.name"
              :label="description.protect_domains.label"
              :description="description.protect_domains.description"
            >
              <InputCheckbox
                :id="description.protect_domains.name"
                :value="objectToArray(form.protect_domains)"
                :options="description.protect_domains.options"
                @input="form.protect_domains = arrayToObject($event)"
              />
            </FormGroup>
          </div>
          <div class="pt-6 sm:pt-5">
            <FormGroup
              :id="description.protect_level.name"
              :label="description.protect_level.label"
              :description="description.protect_level.description"
            >
              <InputRange
                :id="description.protect_level.name"
                :label="
                  'The level of protection (just for blur for now) - ' +
                  form.protect_level +
                  '%'
                "
                :value="Number(form.protect_level)"
                @input="form.protect_level = $event"
              />
            </FormGroup>
          </div>
          <div class="pt-6 sm:pt-5">
            <FormGroup
              :id="description.protect_items.name"
              :label="description.protect_items.label"
              :description="description.protect_items.description"
            >
              <InputCheckbox
                :id="description.protect_items.name"
                :value="objectToArray(form.protect_items)"
                :options="description.protect_items.options"
                @input="form.protect_items = arrayToObject($event)"
              />
            </FormGroup>
          </div>
          <div class="pt-6 sm:pt-5">
            <FormGroup
              :id="description.protect_list.name"
              :label="description.protect_list.label"
              :description="description.protect_list.description"
            >
              <SimpleTextarea
                :id="description.protect_list.name"
                :placeholder="description.protect_list.placeholder"
                :value="form.protect_list"
                @input="form.protect_list = $event"
              />
              <div v-if="protect_list.length > 0">
                <div
                  v-for="(protect_item, index) in protect_list"
                  :key="index"
                  class="flex justify-between items-center w-full sm:w-3/5"
                  :class="[
                    index != 0 ? 'mt-2' : '',
                    index != protect_list.length - 1 ? 'sm:mb-2' : '',
                  ]"
                >
                  <div class="text-base leading-5 font-medium text-gray-900">
                    {{ hideItemName(protect_item) }}
                  </div>
                  <div class="ml-2 text-base leading-5 text-gray-500">
                    <a :href="hideItemUrl(protect_item)" target="_blank">
                      <SimpleButton type="round" color="secondary" size="md">
                        Chat
                      </SimpleButton>
                    </a>
                  </div>
                </div>
              </div>
            </FormGroup>
          </div>
          <div class="pt-6 sm:pt-5">
            <FormGroup
              :id="description.display_type.name"
              :label="description.display_type.label"
              :description="description.display_type.description"
            >
              <InputRadio
                :id="description.display_type.name"
                :value="form.display_type"
                :options="description.display_type.options"
                @input="form.display_type = String($event)"
              />
            </FormGroup>
          </div>
          <div class="mt-6 space-y-6 sm:space-y-5">
            <FormGroup
              :id="description.protect_title.name"
              :label="description.protect_title.label"
              :description="description.protect_title.description"
            >
              <InputToggle
                :id="description.protect_title.name"
                :checked="form.protect_title"
                @input="form.protect_title = !form.protect_title"
              />
            </FormGroup>
          </div>
        </div>
      </div>
      <!-- Hide chat -->
      <div class="pt-6 space-y-6 sm:pt-5 sm:space-y-5">
        <div>
          <h2 class="text-lg leading-6 font-medium text-gray-900">Hide chat</h2>
          <p class="mt-1 max-w-2xl text-base text-gray-500">
            Hide all the chat you don't want it to be seen.
          </p>
        </div>
        <div class="mt-6 space-y-6 sm:space-y-5">
          <div>
            <FormGroup :id="description.hide_status.name" label="Hide status">
              <InputToggle
                :id="description.hide_status.name"
                :checked="form.hide_status"
                @input="form.hide_status = !form.hide_status"
              />
            </FormGroup>
          </div>
          <div class="pt-6 sm:pt-5">
            <FormGroup
              :id="description.hide_list.name"
              :label="description.hide_list.label"
              :description="description.hide_list.description"
            >
              <SimpleTextarea
                :id="description.hide_list.name"
                :placeholder="description.hide_list.placeholder"
                :value="form.hide_list"
                @input="form.hide_list = $event"
              />
              <div v-if="hide_list.length > 0">
                <div
                  v-for="(hide_item, index) in hide_list"
                  :key="index"
                  class="flex justify-between items-center w-full sm:w-3/5"
                  :class="[
                    index != 0 ? 'mt-2' : '',
                    index != hide_list.length - 1 ? 'sm:mb-2' : '',
                  ]"
                >
                  <div class="text-base leading-5 font-medium text-gray-900">
                    {{ hideItemName(hide_item) }}
                  </div>
                  <div class="ml-2 text-base leading-5 text-gray-500">
                    <a :href="hideItemUrl(hide_item)" target="_blank">
                      <SimpleButton type="round" color="secondary" size="md">
                        Chat
                      </SimpleButton>
                    </a>
                  </div>
                </div>
              </div>
            </FormGroup>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-5">
      <div class="flex justify-end">
        <SimpleButton color="primary" size="xl" @click="save">
          Save
        </SimpleButton>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { default_sync_storage } from '@/core/storage'
import FormGroup from '@/components/dashboard/form/FormGroup.vue'
import InputToggle from '@/components/dashboard/form/InputToggle.vue'
import InputRadio from '@/components/dashboard/form/InputRadio.vue'
import InputCheckbox from '@/components/dashboard/form/InputCheckbox.vue'
import SimpleTextarea from '@/components/dashboard/form/SimpleTextarea.vue'
import SimpleButton from '@/components/dashboard/button/SimpleButton.vue'
import InputRange from '../../components/dashboard/form/InputRange.vue'

export default defineComponent({
  components: {
    FormGroup,
    InputToggle,
    InputRadio,
    InputCheckbox,
    SimpleTextarea,
    SimpleButton,
    InputRange,
  },
  data() {
    return {
      form: {
        protect_status: null,
        protect_type: null,
        protect_domains: null,
        protect_level: null,
        protect_items: null,
        protect_list: null,
        display_type: null,
        protect_title: null,
        hide_status: null,
        hide_list: null,
      },
      description: default_sync_storage,
    }
  },
  computed: {
    protect_list() {
      return this.form.protect_list ? this.form.protect_list.split('\n') : []
    },
    hide_list() {
      return this.form.hide_list ? this.form.hide_list.split('\n') : []
    },
  },
  created() {
    this.form.protect_status = this._syncStorage.protect_status
    this.form.protect_type = this._syncStorage.protect_type
    this.form.protect_domains = this._syncStorage.protect_domains
    this.form.protect_level = this._syncStorage.protect_level
    this.form.protect_items = this._syncStorage.protect_items
    this.form.protect_list = this._syncStorage.protect_list
    this.form.display_type = this._syncStorage.display_type
    this.form.protect_title = this._syncStorage.protect_title
    this.form.hide_status = this._syncStorage.hide_status
    this.form.hide_list = this._syncStorage.hide_list
  },
  methods: {
    hideItemName(item) {
      let split = item.split('|')
      return split[1] || split[0]
    },
    hideItemUrl(item) {
      let id = item.split('|')[0]
      let url = 'https://www.messenger.com/t/' + id
      return url
    },
    save() {
      this.$store
        .dispatch('storage/set', {
          storage: 'sync',
          data: this.form,
        })
        .then(() => {
          this.$store.dispatch('storage/fetch')
          let reload =
            this._syncStorage.protect_title !== this.form.protect_title
          if (reload) {
            this.$toast.success(
              'Saved! The page(s) will be reloaded for the changes to take effect.'
            )
          } else {
            this.$toast.success('Saved!')
          }
          this.reinject(reload)
        })
        .catch((err) => {
          this.$toast.error(err)
          console.error(err)
        })
    },
  },
})
</script>
