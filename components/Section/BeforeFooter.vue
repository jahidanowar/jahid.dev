<script setup lang="ts">
const socialLinks = ref([
  {
    name: "youtube",
    link: "https://jahid.dev/go/yt",
    icon: "bi:youtube",
  },
  {
    name: "twitter",
    link: "https://jahid.dev/go/tw",
    icon: "bi:twitter",
  },
  {
    name: "linkedin",
    link: "https://jahid.dev/go/li",
    icon: "bi:linkedin",
  },
  {
    name: "github",
    link: "https://jahid.dev/go/gh",
    icon: "bi:github",
  },
]);
</script>

<template>
  <section>
    <div class="container mx-auto">
      <div class="section-heading text-center heading-spacing !mb-14">
        <h2>What people say about my work</h2>
        <p class="mt-3 inline-block">
          I love hearing from my clients. Here is a selection of reviews just
          in!
        </p>
      </div>
      <div class="grid lg:grid-cols-12 gap-5">
        <div class="col-span-12 lg:col-span-7">
          <SectionTestimonial class="lg:px-20" />
        </div>
        <div class="col-span-12 lg:col-span-5">
          <Cta
            title="Have a Project in Mind?"
            description="Tell me about your product or idea. I'd love to hear it."
            :button="{
              text: 'Say Hello',
              link: '/contact',
            }"
          />
          <div
            class="border mt-10 rounded-3xl p-5 dark:bg-gradient-to-r from-indigo-900/20 to-blue-900/20 dark:border-blue-900/50 bg-black/5"
          >
            <div class="text-center text-lg">
              Connect with me on Social Media
            </div>
            <div class="flex justify-around items-center mt-5 py-3">
              <a
                v-for="link in socialLinks"
                :key="link.name"
                :href="link.link"
                target="_blank"
                class="rounded-3xl p-5 bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 duration-300 transition-all group"
              >
                <Icon
                  :name="link.icon"
                  size="24"
                  class="group-hover:scale-90 duration-300 transition-all"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
