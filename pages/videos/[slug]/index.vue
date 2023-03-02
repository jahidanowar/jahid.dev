<script setup lang="ts">
const slug = useRoute().params.slug as string;

const { query } = useRoute();

useHead({
  title: "Video",
  script: [
    {
      src: "https://www.youtube.com/iframe_api",
      defer: true,
    },
  ],
});

const { data } = await useAsyncData(slug, () =>
  queryContent(`/videos/${slug}`).findOne()
);

const currentVideo = ref(0);
const showSidebar = ref(false);
const player = ref();

onMounted(() => {
  console.log("Mounted");
  if (window.YT) {
    console.log("YT Loaded");

    const playerConfig: any = {
      playerVars: {
        autoplay: 1,
        controls: 1,
        disablekb: 1,
        enablejsapi: 1,
        fs: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        playsinline: 1,
        rel: 0,
        // showinfo: 0,
        start: 0,
      },
      color: "white",
    };

    if (data.value && data.value.playlist) {
      playerConfig.playerVars.listType = "playlist";
      playerConfig.playerVars.list = data.value.playlist;
      playerConfig.playerVars.index = parseInt(query.index as string) || 1;
    } else {
      playerConfig.videoId = data.value?.videos[currentVideo.value];
    }

    const player = new YT.Player("player", playerConfig);

    // on ready
    player.addEventListener("onReady", (event: any) => {
      console.log("Player Ready");
      console.log(player.getPlaylist());
    });
  }
});
</script>

<template>
  <div v-if="data" class="ingle video video-single py-12">
    <!-- Top Bar  -->
    <div class="bg-gray-200 dark:bg-white/10 py-3">
      <div
        class="container mx-auto flex flex-wrap items-center justify-between gap-2 lg:gap-0"
      >
        <div class="w-full lg:w-1/2 text-center lg:text-left">
          <h1>{{ data.title }}</h1>
        </div>
        <div class="w-full lg:w-1/2 flex gap-5 justify-center lg:justify-end">
          <!-- Source Code -->
          <a
            v-if="data.source"
            :href="data.source"
            target="_blank"
            class="flex flex-col justify-center items-center rounded-xl p-3 bg-gray-300 hover:bg-gray-400 dark:bg-white/10 dark:hover:bg-white/20"
          >
            <Icon name="bi:github" size="22" />
            <div class="text-xs mt-1">Source Code</div>
          </a>
          <!-- ./ Source Code -->
          <!-- Live Demo -->
          <a
            v-if="data.demo"
            :href="data.demo"
            class="flex flex-col justify-center items-center rounded-xl p-3 bg-gray-300 hover:bg-gray-400 dark:bg-white/10 dark:hover:bg-white/20"
          >
            <Icon name="bi:eye" size="22" />
            <div class="text-xs mt-1">Live Demo</div>
          </a>
          <!-- ./ Live Demo -->

          <!-- Discord -->
          <a
            href="https://jahid.dev/go/d"
            target="_blank"
            class="flex flex-col justify-center items-center rounded-xl p-3 bg-gray-300 hover:bg-gray-400 dark:bg-white/10 dark:hover:bg-white/20"
          >
            <Icon name="bi:discord" size="22" />
            <div class="text-xs mt-1">Discussion</div>
          </a>
          <!-- ./ Discord -->
        </div>
      </div>
    </div>
    <!-- ./ Top Bar  -->

    <!-- Grid  -->
    <div
      class="grid lg:grid-cols-8"
      :class="{
        container: !showSidebar,
      }"
    >
      <!-- Video Player  -->
      <div
        class="lg:col-span-6"
        :class="{
          'lg:col-span-8': !showSidebar,
        }"
      >
        <div class="relative min-h-[600px]">
          <div ref="player" id="player" class="absolute w-full h-full"></div>
        </div>
      </div>
      <!-- ./ Video Player  -->
      <!-- Video List  -->
      <div
        v-if="showSidebar"
        class="lg:col-span-2 dark:bg-white/20 overflow-y-scroll"
      >
        <div
          v-for="video in data.videos"
          :key="video.id"
          class="flex items-center gap-4 p-4 hover:bg-white/10"
        >
          <div class="w-1/4">
            <NuxtImg
              :src="data.image"
              :alt="data.title"
              class="w-full h-full object-cover"
              width="334px"
              height="188px"
              loading="lazy"
            ></NuxtImg>
          </div>
        </div>
      </div>
      <!-- ./ Video List  -->
    </div>

    <!-- ./ Grid  -->

    <!-- Video Description  -->
    <div class="mx-auto max-w-4xl mt-10">
      <div class="content">
        <ContentRenderer :value="data" class="content" />
      </div>
    </div>
    <!-- ./ Video Description  -->

    <!-- Related Videos  -->
    <!-- ./ Related Videos  -->
  </div>
</template>
