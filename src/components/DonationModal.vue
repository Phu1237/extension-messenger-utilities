<template>
  <!-- http://127.0.0.1:5500/components/application-ui/overlays/modals/#component-f39bfe26a95719b1611d27f969be9a24 -->
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <!-- Background overlay, show/hide based on modal state. -->
      <Transition
        enter-active-class="ease-out duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="ease-in duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          @click="$emit('close')"
        />
      </Transition>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >

      <!-- Modal panel, show/hide based on modal state. -->
      <Transition
        enter-active-class="ease-out duration-300"
        enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        enter-to-class="opacity-100 translate-y-0 sm:scale-100"
        leave-active-class="ease-in duration-200"
        leave-from-class="opacity-100 translate-y-0 sm:scale-100"
        leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      >
        <div
          class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
        >
          <div>
            <div
              class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100"
            >
              <p class="h-6 w-6 text-green-600">☕</p>
            </div>
            <div class="mt-3 text-center sm:mt-5">
              <h3
                id="modal-title"
                class="text-lg leading-6 font-medium text-gray-900"
              >
                Buy me a coffee
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Thank you for using my product 🎉<br />
                  This product is totally free but if you like my works and you
                  want to support me, buy me a coffee ☕<br />
                  Methods:
                  <b class="text-sm">Buy me a coffee</b>
                  (<a
                    href="https://help.buymeacoffee.com/en/articles/4539170-frequently-asked-questions"
                    class="text-sm underline"
                    target="_blank"
                    >FAQs</a
                  >) & <b class="text-sm">Paypal</b> &
                  <b class="text-sm">Momo</b> (For Vietnamese users)
                </p>
              </div>
            </div>
          </div>
          <div
            class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense"
          >
            <a
              href="https://www.buymeacoffee.com/Phu1237"
              alt="Donate via Buy me a coffee"
              target="_blank"
            >
              <SimpleButton class="w-full h-full">
                <img src="../assets/bmc-button.png" alt="BMC" />
              </SimpleButton>
            </a>
            <a
              href="https://me.momo.vn/Phu1237"
              alt="Donate via Momo"
              target="_blank"
            >
              <SimpleButton class="w-full h-full text-black">
                <img src="../assets/momo-btn.png" alt="Momo" />
              </SimpleButton>
            </a>
            <a
              href="https://www.paypal.me/Phu1237"
              alt="Donate via Paypal"
              target="_blank"
            >
              <SimpleButton class="w-full h-full text-black">
                <img src="../assets/paypal-btn.svg" alt="Paypal" />
              </SimpleButton>
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import SimpleButton from '@/components/dashboard/button/SimpleButton.vue'

export default defineComponent({
  components: {
    SimpleButton,
  },
  emits: ['close'],
})
</script>
