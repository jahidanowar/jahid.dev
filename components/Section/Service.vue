<script setup lang="ts">
const services = ref([
  {
    title: "Web App",
    description:
      "Custom web applications built to fit your unique business needs.",
    icon: "system-uicons:phone-portrait",
  },
  {
    title: "Mobile App",
    description:
      "Beautiful and functional mobile applications for iOS and Android platforms.",
    icon: "system-uicons:code",
  },
  {
    title: "Consultancy",
    description:
      "Expert advice and guidance to help your business succeed in the digital world.",
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
    <div class="grid md:grid-cols-3 gap-5 lg:gap-10 mt-10">
      <div
        v-for="(service, i) in services"
        class="md:col-span-1 border p-5 rounded-3xl transition-all duration-300 bg-gray-100 dark:border-white/10 dark:bg-white/5"
      >
        <div
          class="rounded-xl inline-flex p-2 mb-4 bg-black/10 dark:bg-white/10"
        >
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
    <div class="grid md:grid-cols-3 my-5 lg:my-10 gap-5 lg:gap-10">
      <div class="md:col-span-2">
        <div
          class="py-5 px-10 rounded-3xl bg-white/10 text-center relative overflow-hidden clientele"
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

        <!-- <div
          class="rounded-xl border p-5 my-10 border-slate-800 dark:bg-slate-900"
        ></div> -->
      </div>
      <div
        class="lg:col-span-1 py-5 px-8 text-center rounded-3xl bg-gradient-to-r from-primary-600 to-teal-600 flex flex-col justify-center items-center text-white"
      >
        <Icon name="ic:outline-waving-hand" size="40" />
        <h3 class="my-2">Say Hello</h3>
        <p>For project inquiries or just to say hi</p>
        <NuxtLink
          to="/contact"
          class="btn btn-default mt-5 inline-flex items-center group !text-white"
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

<style scoped>
.clientele {
  background-image: linear-gradient(rgba(0, 22, 41, 0.5), rgba(0, 3, 29, 0.9)),
    url("~/assets/img/worldmap.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
