<template>
  <div class="container pb-12">
    <SectionHeading
      title="Blogs"
      :action="{
        text: 'View All',
        to: '/blog',
      }"
    >
      <template #title>
        Web Development Wisdom <br class="hidden lg:block" />
        <span class="text-primary-500">Lessons Learned and Shared</span>
      </template>
      <template #action>
        <span>View All</span>
        <Icon
          name="heroicons:arrow-right"
          size="16"
          class="ml-1 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
        />
      </template>
    </SectionHeading>

    <!-- Blog List  -->
    <ContentList
      path="/blog"
      :query="{
        limit: 5,
        fields: ['title', 'image', 'date'],
        sort: [
          {
            date: -1,
          },
        ],
      }"
      v-slot="{ list }"
    >
      <Swiper
        :modules="[SwiperAutoplay]"
        :space-between="20"
        :loop="true"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: true,
        }"
        :breakpoints="{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }"
      >
        <SwiperSlide v-for="blog in list" :key="blog._path">
          <article
            class="bg-white/5 border dark:border-white/10 p-5 rounded-3xl"
          >
            <NuxtImg
              :src="blog.image"
              :alt="blog.title"
              class="rounded-2xl mb-5 shadow-xl w-full"
              width="334px"
              height="188px"
              loading="lazy"
            ></NuxtImg>
            <!-- Blog Meta -->
            <div class="inline-flex items-center mb-2">
              <div class="inline-flex items-center">
                <Icon name="heroicons:calendar" class="mr-2" size="16" />
                <span>{{ formatDate(blog.date) }}</span>
              </div>
              <div class="inline-flex items-center ml-4">
                <Icon name="heroicons:user" class="mr-2" size="16" />
                <span>Jahid</span>
              </div>
            </div>
            <!-- ./ Blog Meta  -->
            <h3 class="text-lg leading-tight font-bold">
              {{ blog.title }}
            </h3>
          </article>
        </SwiperSlide>
      </Swiper>
    </ContentList>
    <!-- ./ Blog List  -->
  </div>
</template>

<script lang="ts" setup></script>
