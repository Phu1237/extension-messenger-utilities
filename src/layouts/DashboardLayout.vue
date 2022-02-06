<template>
  <div class="min-h-full">
    <div class="bg-gray-800 pb-32">
      <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="border-b border-gray-700">
            <div class="flex items-center justify-between h-16 px-4 sm:px-0">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <img class="h-8 w-8" src="/icons/icon.png" alt="Workflow" />
                </div>
                <div class="hidden md:block">
                  <div class="ml-10 flex items-baseline space-x-4">
                    <NavLink :to="{ name: 'dashboard' }" exact>
                      Dashboard
                    </NavLink>
                    <NavLink :to="{ name: 'options' }">Options</NavLink>
                    <NavLink :to="{ name: 'about' }">About</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div id="mobile-menu" class="border-b border-gray-700 md:hidden">
          <div class="px-2 py-3 space-y-1 sm:px-3">
            <NavLink :to="{ name: 'dashboard' }" exact>Dashboard</NavLink>
            <NavLink :to="{ name: 'options' }">Options</NavLink>
            <NavLink :to="{ name: 'about' }">About</NavLink>
          </div>
        </div>
      </nav>
      <TheBanner />
      <header class="py-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-white">Dashboard</h1>
        </div>
      </header>
    </div>

    <main class="-mt-32">
      <div class="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
          <router-view />
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>

<script>
import TheBanner from '@/components/TheBanner.vue'
import NavLink from '@/components/dashboard/NavLink.vue'

export default {
  components: {
    TheBanner,
    NavLink,
  },
}
</script>
