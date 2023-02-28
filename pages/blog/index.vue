<script setup lang="ts"></script>

<template>
  <div class="archive blog blog-archive py-24">
    <!-- Page Hero  -->
    <section class="page-hero py-12 pb-16 px-5 lg:px-0">
      <div class="lg:w-1/2 mx-auto text-center">
        <h1 class="text-4xl font-bold">
          Website Design, and Full Stack Development Articles.
        </h1>
        <p class="mt-4 lg:w-2/3 mx-auto">
          Get Website Design, Development , Laravel, Vue and WordPress Related
          Articles, Tips , Web Hosting deals coupons and more.
        </p>
      </div>
    </section>
    <!-- ./ Page Hero  -->
    <section class="blog">
      <div class="container mx-auto">
        <!-- Blog List  -->
        <ContentList
          path="/blog"
          :query="{
            limit: -1,
            fields: ['title', 'image', 'date'],
            sort: [
              {
                date: -1,
              },
            ],
          }"
          v-slot="{ list }"
        >
          <div class="grid lg:grid-cols-3 gap-5">
            <article
              v-for="blog in list"
              :key="blog._path"
              class="lg:col-span-1 bg-white/5 border dark:border-white/10 p-5 rounded-3xl"
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
              <NuxtLink :to="blog._path" class="block">
                <h3 class="text-lg leading-tight font-bold">
                  {{ blog.title }}
                </h3>
              </NuxtLink>
            </article>
          </div>
        </ContentList>
        <!-- ./ Blog List  -->
      </div>
    </section>
  </div>
</template>
