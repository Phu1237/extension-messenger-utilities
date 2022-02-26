<template>
  <div class="min-h-full pt-16 pb-12 flex flex-col bg-white">
    <main
      class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div class="flex-shrink-0 flex justify-center">
        <a href="/" class="inline-flex">
          <span class="sr-only">Messenger Utilities</span>
          <img class="h-12 w-auto" src="/icons/icon.png" alt="" />
        </a>
      </div>
      <div class="py-16">
        <div class="text-center">
          <p
            class="text-base font-semibold text-indigo-600 uppercase tracking-wide"
          >
            404 error
          </p>
          <h1
            class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl"
          >
            Page not found.
          </h1>
          <p class="mt-2 text-lg text-gray-500">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
        </div>
      </div>
    </main>
    <footer class="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <nav class="flex justify-center space-x-4">
        <span class="text-base font-medium text-gray-500 hover:text-gray-600">
          Phu1237
        </span>
        <span
          class="inline-block border-l border-gray-300"
          aria-hidden="true"
        ></span>
        <span
          href="#"
          class="text-base font-medium text-gray-500 hover:text-gray-600"
        >
          Messenger Utilities {{ manifest('version') }}
        </span>
      </nav>
    </footer>
  </div>
</template>
