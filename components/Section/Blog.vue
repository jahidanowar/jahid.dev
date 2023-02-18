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
        Web Development Wisdom <br />
        <span class="text-primary-500">Lessons Learned and Shared</span>
      </template>
      <template #action>
        <span>View All</span>
        <Icon name="heroicons:arrow-right" size="16" class="ml-1" />
      </template>
    </SectionHeading>

    <!-- Blog List  -->
    <ContentList
      path="/blog"
      :query="{
        limit: -5,
        fields: ['title', 'image', 'date'],
        sort: [
          {
            date: -1,
          },
        ],
      }"
      v-slot="{ list }"
    >
      <div class="overflow-x-scroll flex thin-scrollbar">
        <div
          v-for="blog in list"
          :key="blog._path"
          class="w-full lg:w-1/3 flex-none mr-5"
        >
          <article class="bg-white/5 border border-white/10 p-5 rounded-2xl">
            <NuxtImg
              :src="blog.image"
              :alt="blog.title"
              class="rounded-2xl mb-5 shadow-xl w-full"
              width="334px"
              height="188px"
              loading="lazy"
            ></NuxtImg>
            <h3 class="text-lg leading-tight font-bold">
              {{ blog.title }}
            </h3>
            <p class="mt-2 text-white/70">
              {{ trunctate(blog.excerpt, 100) }}
            </p>
          </article>
        </div>
      </div>
    </ContentList>
    <!-- ./ Blog List  -->
  </div>
</template>
