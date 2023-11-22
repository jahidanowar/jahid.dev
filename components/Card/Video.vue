<script setup lang="ts">
defineProps<{
  video: Video;
}>();
</script>
<template>
  <NuxtLink
    :to="video._path"
    class="block rounded-3xl relative w-full h-[250px] lg:h-[340px] overflow-hidden shadow-xl group video-card"
  >
    <NuxtImg
      :src="video.image"
      :alt="video.title"
      class="absolute inset-0 w-full h-full object-cover z-1 group-hover:scale-105 transition-all duration-500 ease-in-out"
      width="334px"
      height="188px"
      loading="lazy"
      :placeholder="[50, 25, 75, 5]"
    ></NuxtImg>
    <div
      class="absolute inset-0 bg-gradient-to-t from-gray-800 to-gray-100/10 dark:from-black dark:to-black/10 group-hover:to-black/20 transition-all duration-500 flex flex-col justify-end p-4 z-2 cursor-pointer"
    >
      <div class="p-5 text-white">
        <h3>{{ video.title }}</h3>
        <div class="flex gap-5 mt-2">
          <div class="inline-flex">
            <Icon name="heroicons:calendar" size="16" />
            <span class="ml-1 text-sm">{{ formatDate(video.date) }}</span>
          </div>
          <div class="inline-flex items-center">
            <Icon
              :name="
                video.type === 'course'
                  ? 'heroicons:rectangle-stack'
                  : 'heroicons:play'
              "
              size="16"
            />
            <span class="ml-1 text-sm">{{
              video.type === "course"
                ? video.videos.length + " Lessons"
                : "Single Lesson"
            }}</span>
          </div>
        </div>
      </div>
      <Icon
        name="heroicons:play-solid"
        size="60"
        class="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-3 group-hover:text-primary-400 transition duration-300 ease-in-out group-hover:scale-110 bg-white/10 rounded-full p-4 backdrop-filter backdrop-blur-sm"
      />
    </div>
  </NuxtLink>
</template>
