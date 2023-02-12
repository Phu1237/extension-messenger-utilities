<template>
    <div class="p-1">
        <AlertBox v-if="alert.message" :type="alert.type" :message="alert.message" />
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
            <ul class="filter-switch inline-flex items-center relative h-10 p-1 space-x-1 bg-gray-300 rounded-md text-blue-600">
                <li class="filter-switch-item flex relative h-8 bg-gray-300">
                    <input id="protect_status_disable" name="protect_status" type="radio" class="sr-only" value="disable" :checked="!form.protect_status" @change="form.protect_status = false" />
                    <label for="protect_status_disable" class="h-8 py-1 px-2 bg-white text-sm leading-6 text-gray-600 hover:text-blue-600 rounded shadow">
                        Disable
                    </label>
                    <div aria-hidden="true" class="filter-active"></div>
                </li>
                <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                    <input id="protect_status_enable" name="protect_status" type="radio" class="sr-only" value="enable" :checked="form.protect_status" @change="form.protect_status = true" />
                    <label for="protect_status_enable" class="h-8 py-1 px-2 bg-white text-sm leading-6 text-gray-600 hover:text-blue-600 rounded shadow">
                        Enable
                    </label>
                </li>
            </ul>
        </div>
        <div class="px-2">
            <div class="font-medium">Protect domains</div>
			<div class="px-1">
				<input type="checkbox" :checked="form.protect_domains['messenger.com']" @click="form.protect_domains['messenger.com'] = !form.protect_domains['messenger.com']" /> messenger.com
			</div>
			<div class="px-1">
				<input type="checkbox" :checked="form.protect_domains['facebook.com']" @click="form.protect_domains['facebook.com'] = !form.protect_domains['facebook.com']" /> facebook.com
			</div>
        </div>
        <div class="px-2">
            <div class="font-medium">Display type</div>
            <ul class="filter-switch inline-flex items-center relative h-10 p-1 space-x-1 bg-gray-300 rounded-md text-blue-600">
                <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                    <input id="display_type_none" name="display_type" type="radio" class="sr-only" value="none" :checked="form.display_type === 'none'" @click="form.display_type = 'none'" />
                    <label for="display_type_none" class="h-8 py-1 px-2 bg-white text-sm leading-6 text-gray-600 hover:text-blue-600 rounded shadow">
                        None
                    </label>
                    <div aria-hidden="true" class="filter-active"></div>
                </li>
                <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                    <input id="display_type_hover" name="display_type" type="radio" class="sr-only" value="hover" :checked="form.display_type === 'hover'" @click="form.display_type = 'hover'" />
                    <label for="display_type_hover" class="h-8 py-1 px-2 bg-white text-sm leading-6 text-gray-600 hover:text-blue-600 rounded shadow">
                        Hover
                    </label>
                </li>
            </ul>
        </div>
        <div class="px-2">
            <div class="font-medium">Protect title</div>
            <ul class="filter-switch inline-flex items-center relative h-10 p-1 space-x-1 bg-gray-300 rounded-md text-blue-600">
                <li class="filter-switch-item flex relative h-8 bg-gray-300">
                    <input id="protect_title_disable" name="protect_title" type="radio" class="sr-only" value="disable" :checked="!form.protect_title" @change="form.protect_title = false" />
                    <label for="protect_title_disable" class="h-8 py-1 px-2 bg-white text-sm leading-6 text-gray-600 hover:text-blue-600 rounded shadow">
                        Disable
                    </label>
                    <div aria-hidden="true" class="filter-active"></div>
                </li>
                <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                    <input id="protect_title_enable" name="protect_title" type="radio" class="sr-only" value="enable" :checked="form.protect_title" @change="form.protect_title = true" />
                    <label for="protect_title_enable" class="h-8 py-1 px-2 bg-white text-sm leading-6 text-gray-600 hover:text-blue-600 rounded shadow">
                        Enable
                    </label>
                </li>
            </ul>
        </div>
        <!-- Hide chat -->
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
            <ul class="filter-switch inline-flex items-center relative h-10 p-1 space-x-1 bg-gray-300 rounded-md text-blue-600">
                <li class="filter-switch-item flex relative h-8 bg-gray-300">
                    <input id="hide_status_disable" name="hide_status" type="radio" class="sr-only" value="disable" :checked="!form.hide_status" @change="form.hide_status = false" />
                    <label for="hide_status_disable" class="h-8 py-1 px-2 bg-white text-sm leading-6 text-gray-600 hover:text-blue-600 rounded shadow">
                        Disable
                    </label>
                    <div aria-hidden="true" class="filter-active"></div>
                </li>
                <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                    <input id="hide_status_enable" name="hide_status" type="radio" class="sr-only" value="enable" :checked="form.hide_status" @change="form.hide_status = true" />
                    <label for="hide_status_enable" class="h-8 py-1 px-2 bg-white text-sm leading-6 text-gray-600 hover:text-blue-600 rounded shadow">
                        Enable
                    </label>
                </li>
            </ul>
        </div>
        <button id="save_btn" class="w-full mt-2 py-3 bg-blue-500 hover:bg-blue-700 focus:outline-none font-semibold text-white" @click="save">
            Save
        </button>
    </div>
</template>
<script>
    import { defineComponent } from 'vue'
    import AlertBox from '@/components/AlertBox.vue'

    export default defineComponent({
        components: {
            AlertBox,
        },
        data() {
            return {
                alert: {
                    type: '',
                    message: '',
                },
                form: {
                    protect_status: null,
                    protect_domains: null,
                    display_type: null,
                    protect_title: null,
                    hide_status: null,
                },
            }
        },
        created() {
            this.form.protect_status = this._syncStorage.protect_status
            this.form.protect_domains = this._syncStorage.protect_domains
            this.form.display_type = this._syncStorage.display_type
            this.form.protect_title = this._syncStorage.protect_title
            this.form.hide_status = this._syncStorage.hide_status
        },
        methods: {
            pushAlert(type, message) {
                this.alert.type = type
                this.alert.message = message
            },
            save() {
				console.log(this.form)
                this.$store
                    .dispatch('storage/set', {
                        storage: 'sync',
                        data: this.form,
                    })
                    .then(() => {
                        this.$store.dispatch('storage/fetch')
                        let reload = this._syncStorage.protect_title !== this.form.protect_title
                        if (reload) {
                            this.pushAlert('success', 'Saved! The page(s) will be reloaded for the changes to take effect.')
                        } else {
                            this.pushAlert('success', 'Saved!')
                        }
                        this.reinject(reload)
                    })
                    .catch((err) => {
                        this.pushAlert('error', err.message)
                    })
            },
            goToDashboard() {
                if (chrome.runtime.openOptionsPage) {
                    chrome.runtime.openOptionsPage()
                } else {
                    window.open(chrome.runtime.getURL('ui.html#/dashboard/options'))
                }
            },
        },
    })
</script>