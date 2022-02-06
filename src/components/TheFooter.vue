<template>
  <footer class="grid grid-cols-4 text-center">
    <a
      class="grid justify-center items-center py-3 bg-blue-500"
      href="https://www.facebook.com/Phu1237"
      title="Facebook"
    >
      <font-awesome-icon :icon="['fab', 'facebook']" class="h-6" />
    </a>
    <a
      class="grid justify-center items-center py-3 bg-black"
      href="https://github.com/phu1237/"
      title="Github"
    >
      <font-awesome-icon :icon="['fab', 'github']" class="h-6" />
    </a>
    <a
      class="grid justify-center items-center py-3 bg-red-500"
      href="mailto:phu1237@gmail.com"
      title="Mail"
    >
      <font-awesome-icon :icon="['far', 'envelope']" class="h-6" />
    </a>
    <a
      class="grid justify-center items-center py-3 bg-blue-700"
      href="https://www.linkedin.com/in/phu1237/"
      title="Linkedin"
    >
      <font-awesome-icon :icon="['fab', 'linkedin']" class="h-6" />
    </a>
  </footer>
  <div class="flex justify-between px-2">
    Author: Phu1237
    <span id="version">v</span>
  </div>
</template>

<style lang="scss">
footer {
  a {
    color: #fff;
  }
}
</style>
