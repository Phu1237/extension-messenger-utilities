<template>
  <div>
    <main>
      <!-- Page header -->
      <div
        class="max-w-3xl mx-auto md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl"
      >
        <div class="flex items-center space-x-5">
          <div class="flex-shrink-0">
            <div class="relative">
              <img
                class="h-16 w-16 rounded-full"
                src="/icons/icon.png"
                alt="Logo"
              />
              <span
                class="absolute inset-0 shadow-inner rounded-full"
                aria-hidden="true"
              ></span>
            </div>
          </div>
          <div>
            <h1 class="text-2xl font-bold text-gray-900">
              Messenger Utilities
            </h1>
            <p class="text-base font-medium text-gray-500">
              Utilities for Facebook Messenger Extension for Chrome / Edge /
              Chromium based browsers
            </p>
          </div>
        </div>
        <div
          class="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3"
        >
          <a
            href="https://microsoftedge.microsoft.com/addons/detail/dikgifmgfijhmfapckmkbgldlljmihea"
          >
            <SimpleButton
              type="leading-icon"
              color="primary"
              size="xl"
              :icon="['fab', 'edge']"
            >
              Rate me on Edge
            </SimpleButton>
          </a>
          <a
            href="https://addons.opera.com/en/extensions/details/messenger-utilities"
          >
            <SimpleButton
              type="trailing-icon"
              color="primary"
              size="xl"
              :icon="['fab', 'opera']"
            >
              Rate me on Opera
            </SimpleButton>
          </a>
        </div>
      </div>

      <div
        class="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3"
      >
        <div class="space-y-6 lg:col-start-1 lg:col-span-2">
          <!-- Description list-->
          <section aria-labelledby="applicant-information-title">
            <div>
              <div class="">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div class="sm:col-span-1">
                    <dt class="text-base font-medium text-gray-500">Author</dt>
                    <dd class="mt-1 text-base text-gray-900">Phu1237</dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-base font-medium text-gray-500">
                      Email address
                    </dt>
                    <dd class="mt-1 text-base text-gray-900">
                      <a
                        href="mailto:phu1237@gmail.com"
                        class="text-base"
                        target="_blank"
                      >
                        Phu1237@gmail.com
                      </a>
                    </dd>
                  </div>
                  <div class="sm:col-span-2">
                    <dt class="text-base font-medium text-gray-500">
                      Report bugs
                    </dt>
                    <dd class="mt-1 text-base text-gray-900">
                      <a
                        href="https://github.com/Phu1237/extension-messenger-utilities/issues"
                        title="Report bugs"
                        class="text-base"
                        target="_blank"
                      >
                        https://github.com/Phu1237/extension-messenger-utilities/issues
                      </a>
                      <br />or send me an email
                    </dd>
                  </div>
                  <div class="sm:col-span-2">
                    <dt class="text-base font-medium text-gray-500">
                      Contact me
                    </dt>
                    <dd class="mt-1 text-base text-gray-900">
                      <a
                        href="https://www.facebook.com/Phu1237"
                        title="Facebook"
                        target="_blank"
                        class="mr-1"
                      >
                        <SimpleButton
                          type="leading-icon"
                          color="secondary"
                          :icon="['fab', 'facebook']"
                        >
                          Facebook
                        </SimpleButton>
                      </a>
                      <a
                        href="https://github.com/phu1237/"
                        title="Github"
                        target="_blank"
                        class="mr-1"
                      >
                        <SimpleButton
                          type="leading-icon"
                          color="secondary"
                          :icon="['fab', 'github']"
                        >
                          Github
                        </SimpleButton>
                      </a>
                      <a
                        href="mailto:phu1237@gmail.com"
                        title="Email"
                        target="_blank"
                        class="mr-1"
                      >
                        <SimpleButton
                          type="leading-icon"
                          color="secondary"
                          :icon="['far', 'envelope']"
                        >
                          Email
                        </SimpleButton>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/phu1237/"
                        title="Linkedin"
                        target="_blank"
                      >
                        <SimpleButton
                          type="leading-icon"
                          color="secondary"
                          :icon="['fab', 'linkedin']"
                        >
                          Linkedin
                        </SimpleButton>
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>
        </div>

        <section
          aria-labelledby="timeline-title"
          class="lg:col-start-3 lg:col-span-1"
        >
          <div class="">
            <h2 id="timeline-title" class="text-lg font-medium text-gray-900">
              Features
            </h2>

            <!-- Activity Feed -->
            <div class="mt-6 flow-root">
              <ul role="list" class="-mb-8">
                <!-- Available -->
                <li>
                  <div class="relative pb-8">
                    <span
                      class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    ></span>
                    <div class="relative flex space-x-3">
                      <div>
                        <span
                          class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white"
                        >
                          <FontAwesomeIcon
                            :icon="['fas', 'face-smile']"
                            class="w-5 h-5 text-white"
                          />
                        </span>
                      </div>
                      <div
                        class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4"
                      >
                        <div>
                          <p class="text-base text-gray-500">Protect privacy</p>
                        </div>
                        <div
                          class="text-right text-base whitespace-nowrap text-gray-500"
                        >
                          Stable
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="relative pb-8">
                    <span
                      class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    ></span>
                    <div class="relative flex space-x-3">
                      <div>
                        <span
                          class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white"
                        >
                          <FontAwesomeIcon
                            :icon="['fas', 'face-smile']"
                            class="w-5 h-5 text-white"
                          />
                        </span>
                      </div>
                      <div
                        class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4"
                      >
                        <div>
                          <p class="text-base text-gray-500">Hide chat</p>
                        </div>
                        <div
                          class="text-right text-base whitespace-nowrap text-gray-500"
                        >
                          Stable
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- Under-development -->
                <li>
                  <div class="relative pb-8">
                    <span
                      class="absolute top-4 left-4 -ml-px w-0.5 bg-gray-200"
                      aria-hidden="true"
                    ></span>
                    <div class="relative flex space-x-3">
                      <div>
                        <span
                          class="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white"
                        >
                          <FontAwesomeIcon
                            :icon="['fas', 'face-meh']"
                            class="w-5 h-5 text-white"
                          />
                        </span>
                      </div>
                      <div
                        class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4"
                      >
                        <div>
                          <p class="text-base text-gray-500">
                            Password protection
                          </p>
                        </div>
                        <div
                          class="text-right text-base whitespace-nowrap text-gray-500"
                        >
                          Not yet
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import SimpleButton from '@/components/dashboard/button/SimpleButton.vue'

export default defineComponent({
  components: {
    SimpleButton,
  },
})
</script>
