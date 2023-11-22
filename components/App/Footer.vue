<script setup lang="ts">
// const video = await queryContent("videos")
//   .where({
//     type: "course",
//   })
//   .only(["title", "_path"])
//   .find();

const { $localePath } = useNuxtApp();
const socialLinks = ref([
  {
    name: "youtube",
    link: "https://jahid.dev/go/yt",
    icon: "bi:youtube",
  },
  {
    name: "discord",
    link: "https://jahid.dev/go/d",
    icon: "bi:discord",
  },
  {
    name: "twitter",
    link: "https://jahid.dev/go/tw",
    icon: "bi:twitter",
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
    <footer class="py-20 border-t dark:border-white/10">
      <div class="container mx-auto">
        <!-- Footer Grid  -->
        <div class="grid lg:grid-cols-4 gap-10">
          <!-- Aout Section -->
          <div class="lg:col-span-2 flex flex-col justify-between">
            <div>
              <Logo class="h-[30px]" />
              <div class="text-lg mt-5">
                Shaping world class websites, designs and experiences.
              </div>
            </div>
            <!-- Social Links  -->
            <div class="inline-flex gap-5 mt-5">
              <a
                v-for="link in socialLinks"
                :key="link.icon"
                :href="link.link"
                class="p-4 bg-gray-100 dark:bg-white/10 rounded-xl"
              >
                <Icon :name="link.icon" size="20" />
              </a>
            </div>
            <!-- ./ Social Links  -->
            <!-- Newsletter Form  -->
            <div class="mt-12">
              <div class="text-lg mb-2 inline-flex items-center">
                <Icon name="system-uicons:mail-open" size="22" class="mr-1" />
                <span>Nuxt development updates</span>
              </div>
              <form
                class="flex"
                id="mc-embedded-subscribe-form"
                action="https://dev.us8.list-manage.com/subscribe/post?u=2df9d9dee856197c9cb3e0fac&amp;id=ac2908ee1e"
                method="post"
                name="mc-embedded-subscribe-form"
              >
                <input
                  type="email"
                  name="EMAIL"
                  id="email"
                  class="rounded-tl-xl rounded-bl-xl border-gray-300 dark:bg-white/10 dark:border-white/20 dark:placeholder-white/40 border-r-0"
                  placeholder="Enter your email"
                />
                <div
                  style="position: absolute; left: -5000px"
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_2df9d9dee856197c9cb3e0fac_ac2908ee1e"
                    tabindex="-1"
                    value=""
                  />
                </div>
                <ButtonIcon
                  icon-size="14"
                  class="!rounded-tr-xl !rounded-br-xl px-4 !bg-primary-500 hover:!bg-primary-600 !text-white !rounded-tl-none !rounded-bl-none"
                  >Subscribe</ButtonIcon
                >
              </form>
            </div>
            <!-- ./ Newsletter Form  -->
          </div>
          <!-- ./ About Section  -->
          <!-- Links  -->
          <div class="lg:col-span-1 p-5">
            <h4>Quick Links</h4>
            <ul class="mt-5">
              <li class="mb-5">
                <NuxtLink to="/blog">Blog</NuxtLink>
              </li>
              <li class="mb-5">
                <NuxtLink to="/videos">Videos</NuxtLink>
              </li>
              <li class="mb-5">
                <NuxtLink to="/portfolio">Portfolio</NuxtLink>
              </li>
            </ul>
          </div>
          <!-- ./ Links  -->
          <!-- Support -->
          <div class="lg:col-span-1 p-5">
            <h4>Contact</h4>
            <p class="mt-5">
              If you have any questions, or want to have a ☕️ with me, please
              feel free to contact me.
            </p>
            <NuxtLink
              :to="$localePath({ name: 'contact' })"
              class="btn btn-default inline-block mt-5 font-"
              >Let's have a chai ☕️</NuxtLink
            >
          </div>
          <!-- ./ Support -->
        </div>
        <!-- ./ Footer Grid  -->
      </div>
    </footer>
    <!-- Copyright -->

    <!-- ,/ Copyright  -->
  </section>
</template>
