<template>
  <div class="container pb-12">
    <div class="w-1/2 mx-auto text-center pb-12">
      <h2>
        Code with me <br class="hidden lg:block" />
        <span class="text-primary-500 text-xl"
          >Learn Coding through Video Lessons</span
        >
      </h2>
    </div>

    <!-- Video List  -->
    <ContentList
      path="/video"
      :query="{
        limit: 5,
        fields: ['title', 'image', 'date', 'type'],
        sort: [
          {
            date: -1,
          },
        ],
      }"
      v-slot="{ list }"
    >
      <Swiper
        :breakpoints="{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }"
      >
        <SwiperSlide v-for="video in list" :key="video.path">
          <div
            class="rounded-3xl relative w-full h-[340px] rounded-3xl overflow-hidden shadow-xl"
          >
            <NuxtImg
              :src="video.image"
              :alt="video.title"
              class="absolute inset-0 w-full h-full object-cover z-1"
              width="334px"
              height="188px"
              loading="lazy"
            ></NuxtImg>
            <div
              class="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-4 z-2 group cursor-pointer"
            >
              <div class="p-5 text-white">
                <h3>{{ video.title }}</h3>
                <div class="flex gap-5 mt-2">
                  <div class="inline-flex">
                    <Icon name="heroicons:calendar" size="16" />
                    <span class="ml-1 text-sm">{{
                      formatDate(video.date)
                    }}</span>
                  </div>
                  <div class="inline-flex items-center">
                    <Icon
                      :name="
                        video.type === 'playlist'
                          ? 'heroicons:rectangle-stack'
                          : 'heroicons:play'
                      "
                      size="16"
                    />
                    <span class="ml-1 text-sm">{{
                      video.type === "playlist"
                        ? video.videos.length + " Lessons"
                        : "Single Lesson"
                    }}</span>
                  </div>
                </div>
              </div>
              <Icon
                name="heroicons:play-solid"
                size="60"
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-3 group-hover:text-primary-400 transition duration-300 ease-in-out group-hover:scale-110 transform-gpu bg-white/10 rounded-full p-4 backdrop-filter backdrop-blur-sm"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </ContentList>

    <!-- ./ Video List  -->
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
</script>
