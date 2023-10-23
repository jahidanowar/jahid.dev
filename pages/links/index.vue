<script lang="ts" setup>
definePageMeta({
  layout: "canvas",
});

const colorMode = useColorMode();

useHead({
  title: "Jahid's Links",
  titleTemplate: "",
  meta: [
    {
      name: "description",
      content:
        "A collection of links to my social profiles, projects, and more.",
    },
  ],
});

const links = ref([
  {
    title: "YouTube",
    url: "https://jahid.dev/go/yt",
    icon: "ph:youtube-logo",
  },
  {
    title: "Discord",
    url: "https://jahid.dev/go/d",
    icon: "ph:discord-logo",
  },
  {
    title: "GitHub",
    url: "https://jahid.dev/go/gh",
    icon: "ph:github-logo",
  },
  {
    title: "Twitter",
    url: "https://jahid.dev/go/tw",
    icon: "ph:twitter-logo",
  },
]);

const menus = ref([
  {
    title: "Home",
    url: "/",
    icon: "solar:home-2-outline",
  },
  {
    title: "Projects",
    url: "/portfolio",
    icon: "solar:folder-with-files-outline",
  },
  {
    title: "Blog",
    url: "/blog",
    icon: "solar:document-add-outline",
  },
  {
    title: "Contact",
    url: "/contact",
    icon: "solar:call-chat-outline",
  },
]);
</script>
<template>
  <div class="page page-bio">
    <div class="bg-noise"></div>

    <div class="bio max-w-md mx-auto h-screen grid place-items-center relative">
      <div class="bio-inner px-8 lg:px-0">
        <header class="bio-header">
          <div
            class="avatar rounded-full mb-4 ring-4 hover:ring-8 ring-gray-200 dark:ring-gray-800 relative w-[80px] h-[80px] overflow-hidden transition-all duration-300"
          >
            <NuxtImg
              src="/images/jahid-anowar.png"
              width="80"
              height="80"
              class="absolute w-full h-full"
            ></NuxtImg>
          </div>
          <h1 class="text-xl mb-4">
            <span class="text-primary-500">hello</span>👋 i'm jahid
          </h1>
          <p>
            I am a full-stack developer crafting fun content for the web.
            <br class="hidden lg:block" />My expertise lies in the development
            of web applications and sites, utilizing technologies such as
            JavaScript, Vue, Nuxt, and Node.
          </p>
        </header>

        <!-- Links  -->
        <div class="bio-links mt-8 flex flex-col gap-5">
          <a
            v-for="link in links"
            :key="link.url"
            :href="link.url"
            target="_blank"
            class="flex py-3 px-4 w-full rounded-xl border gap-4 justify-between text-base bg-white hover:bg-gray-50 dark:bg-white/20 hover:dark:bg-white/30 backdrop-blur border-black/10 dark:border-white/20 transition-all duration-300 group"
          >
            <span> {{ link.title }}</span>
            <Icon
              :name="link.icon"
              size="24"
              class="group-hover:scale-110 transition-all duration-200"
            ></Icon>
          </a>
        </div>
        <!-- ./ Links  -->
      </div>

      <nav
        class="bio-menu sticky w-full top-10 bottom-2 left-0 right-0 px-8 lg:px-0"
      >
        <div
          class="flex justify-between items-center bg-white/80 dark:bg-white/20 backdrop-blur py-2 px-3 rounded-xl border border-black/10 dark:border-white/20 transition-all duration-300 mt-10"
        >
          <div class="inline-flex gap-4">
            <a
              v-for="menu in menus"
              :key="menu.url"
              :href="menu.url"
              :title="menu.title"
              class="rounded-full p-1.5 hover:text-primary-500 transition-all duration-300"
            >
              <Icon :name="menu.icon" size="24"></Icon>
            </a>
          </div>

          <button
            class="rounded-full p-1.5 hover:text-primary-500 transition-all duration-300 transform hover:rotate-90"
            @click="
              colorMode.preference =
                colorMode.preference === 'dark' ? 'light' : 'dark'
            "
          >
            <Icon
              v-if="colorMode.value === 'dark'"
              name="ph:sun"
              size="24"
            ></Icon>
            <Icon v-else name="ph:moon" size="24"></Icon>
          </button>
        </div>
      </nav>
    </div>
  </div>
</template>

<style></style>
