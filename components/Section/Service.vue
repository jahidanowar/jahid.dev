<script setup lang="ts">
const services = ref([
  {
    title: "Web App",
    description:
      "My first focus is on giving a minimalist edge to the web world and making it more accessible to the masses.",
    icon: "system-uicons:phone-portrait",
  },
  {
    title: "Corporate Traning",
    description:
      "I provide corporate training on Vue js, Nuxt js, and Tailwind css.",
    icon: "system-uicons:code",
  },
  {
    title: "Consultancy",
    description:
      "I help businesses connect with audiences, delivering greater brand engagement through designing engaging web Apps.",
    icon: "system-uicons:lightbulb",
  },
]);
</script>

<template>
  <div class="container pb-24">
    <!-- Heading  -->
    <div class="text-center">
      <h2>Things I do and brag about</h2>
      <p class="mt-2">
        I help businesses connect with audiences, delivering greater brand
        engagement <br class="hidden lg:block" />
        through designing engaging web Apps.
      </p>
    </div>
    <!-- ./ Heading  -->

    <!-- Services  -->
    <div class="grid lg:grid-cols-3 gap-5 lg:gap-10 mt-10">
      <div
        v-for="service in services"
        class="lg:col-span-1 border p-5 dark:border-white/20 dark:bg-white/10 rounded-xl bg-gray-100 hover:border-primary-500 transition-all duration-300"
      >
        <div class="rounded-xl inline-flex bg-white/20 p-2 mb-4">
          <Icon :name="service.icon" size="40" />
        </div>

        <h3>{{ service.title }}</h3>
        <p class="mt-2">
          {{ service.description }}
        </p>
      </div>
    </div>
    <!-- ./ Services  -->

    <!-- CTA  -->
    <div class="grid lg:grid-cols-3 my-5 lg:my-10 gap-5 lg:gap-10">
      <div
        class="lg:col-span-2 py-5 px-10 rounded-xl bg-white/10 text-center relative overflow-hidden clientele"
      >
        <div class="z-10 text-white">
          <h3>Trusted by Brands Globally</h3>
          <p class="mt-2">
            Here are some organizations, I had a pleasure to work with.
          </p>
          <img
            src="https://jahid.dev/_nuxt/image/57fe2d.png"
            alt="Brands I have worked with"
            class="mx-auto w-full mt-2"
          />
        </div>
      </div>
      <div
        class="lg:col-span-1 py-5 px-8 text-center rounded-xl bg-gradient-to-r from-primary-600 to-teal-600 flex flex-col justify-center items-center text-white"
      >
        <h3>Have a project in mind?</h3>
        <p>
          Tell me about your product or idea. <br />
          I'd love to hear it.
        </p>
        <NuxtLink
          to="/contact"
          class="btn btn-default mt-5 inline-flex items-center group"
        >
          <span class="text-white">Contact Me</span>
          <Icon
            name="heroicons:arrow-right"
            size="16"
            class="ml-1 group-hover:translate-x-1 duration-300"
          />
        </NuxtLink>
      </div>
    </div>
    <!-- ./ CTA -->
  </div>
</template>
