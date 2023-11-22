<script lang="ts" setup>
definePageMeta({
  layout: "canvas",
});

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

const { data: latestYoutubeVideo } = useFetch("/api/videos/get-latest");

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
</script>
<template>
  <div class="page page-bio">
    <div class="bg-noise"></div>

    <div class="bio max-w-md mx-auto h-screen grid place-items-center relative">
      <div class="bio-inner px-8 lg:px-0 py-4">
        <header class="bio-header mb-6">
          <div
            class="avatar rounded-full mb-4 ring-4 hover:ring-8 ring-gray-200 dark:ring-gray-800 relative w-[80px] h-[80px] overflow-hidden transition-all duration-300"
          >
            <NuxtImg
              src="/images/jahid-anowar.jpg"
              width="80"
              height="80"
              format="webp"
              class="absolute w-full h-full"
              alt="Jahid Anowar"
              :placeholder="[50, 25, 75, 5]"
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

        <!-- Latest Youtube Video  -->
        <div class="mb-6">
          <h2 class="text-xs font-semibold !text-gray-500 uppercase mb-2">
            {{ $t("latest_youtube_video") }}
          </h2>
          <LinkYoutubeVideo
            v-if="latestYoutubeVideo"
            :video="latestYoutubeVideo"
          />
        </div>
        <!-- ./ Latest Youtube Video  -->

        <div class="mb-4">
          <h2 class="text-xs font-semibold !text-gray-500 uppercase mb-2">
            {{ $t("links") }}
          </h2>
          <!-- Links  -->
          <div class="bio-links flex flex-col gap-5">
            <LinkItem v-for="link in links" :key="link.url" :link="link" />
          </div>
          <!-- ./ Links  -->
        </div>
      </div>

      <LinkNavigation />
    </div>
  </div>
</template>

<style scoped>
.glass {
  @apply bg-white hover:bg-gray-50 dark:bg-white/20 hover:dark:bg-white/30 backdrop-blur border-black/10 dark:border-white/20;
}
</style>
