<script lang="ts" setup>
import type { YoutubeVideo } from "~/types/video/YoutubeVideo";
defineProps<{
  video: YoutubeVideo;
}>();
</script>
<template>
  <a
    :href="`https://youtube.com/watch?v=${video.id.videoId}`"
    class="youtube-video gradient-box flex flex-col lg:flex-row lg:items-center group rounded-xl"
  >
    <div class="relative aspect-video w-full lg:w-auto lg:h-[90px]">
      <NuxtImg
        :src="`https://i.ytimg.com/vi/${video.id.videoId}/hq720.jpg`"
        :alt="video?.snippet.title"
        width="256"
        height="144"
        fit="cover"
        class="w-full h-full absolute transition-all duration-300 rounded-t-xl lg:rounded-se-none lg:rounded-l-xl"
      ></NuxtImg>
    </div>

    <div class="px-4 py-4 lg:py-2 lg:px-4">
      <div v-if="video?.snippet.title">
        <h3 class="text-base font-semibold" v-html="video?.snippet.title"></h3>
      </div>
      <div class="text-xs mt-2 flex gap-4">
        <!-- Upcoming Badge  -->

        <div
          v-if="video.snippet.liveBroadcastContent === 'upcoming'"
          class="py-1 px-2 bg-gradient-to-r from-rose-500 to-amber-500 rounded text-white/90"
        >
          {{ $t("upcoming") }}
        </div>

        <!-- ./ Upcoming Badge -->

        <div class="inline-flex items-center gap-2">
          <Icon name="solar:calendar-minimalistic-outline" size="14"></Icon>
          <span> {{ formatDate(video.snippet.publishedAt) }}</span>
        </div>
      </div>
    </div>
  </a>
</template>

<style scoped>
.gradient-box {
  @apply bg-white dark:bg-gray-800;
  position: relative;
  box-sizing: border-box;
  background-clip: padding-box;
}
.gradient-box:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  margin: -2px;
  /* !importanté */
  border-radius: 14px;
  /* !importanté */
  background: linear-gradient(
    to right,
    hsl(100 100% 60%),
    hsl(200 100% 60%),
    hsl(300 100% 60%),
    hsl(400 100% 60%),
    hsl(500 100% 60%),
    hsl(600 100% 60%),
    hsl(700 100% 60%),
    hsl(800 100% 60%),
    hsl(900 100% 60%),
    hsl(1000 100% 60%)
  );
  background-size: 400% 400%;
  transition: all 0.2s ease-in-out;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
