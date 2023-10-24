<script lang="ts" setup>
import type { YoutubeVideo } from "~/types/video/YoutubeVideo";
defineProps<{
  video: YoutubeVideo;
}>();
</script>
<template>
  <a
    :href="`https://youtube.com/watch?v=${video.id.videoId}`"
    class="glass flex flex-col lg:flex-row rounded-xl overflow-hidden items-center group"
  >
    <div class="relative aspect-video w-full lg:w-auto lg:h-[90px]">
      <NuxtImg
        :src="video?.snippet.thumbnails.medium.url"
        :alt="video?.snippet.title"
        width="256"
        height="144"
        fit="cover"
        class="w-full h-full absolute group-hover:scale-105 transition-all duration-300"
      ></NuxtImg>
    </div>

    <div class="px-4 py-2 lg:px-4">
      <div class="font-semibold">
        {{ video?.snippet.title }}
      </div>
      <div class="text-xs mt-1 inline-flex items-center gap-2">
        <Icon name="solar:calendar-minimalistic-outline" size="14"></Icon>
        <span> {{ formatDate(video.snippet.publishedAt) }}</span>
      </div>
    </div>
  </a>
</template>

<style></style>
