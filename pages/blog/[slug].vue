<script setup lang="ts">
const slug = useRoute().params.slug as string;

const { data } = await useAsyncData(slug, () =>
  queryContent(`/blog/${slug}`).findOne()
);

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Blog post not found",
  });
}
</script>

<template>
  <div class="single blog blog-single py-32">
    <article class="container mx-auto" v-if="data">
      <!-- Blog Header  -->
      <header class="mx-auto max-w-3xl mb-10">
        <h1 class="text-center lg:!text-5xl">{{ data.title }}</h1>
        <!-- Post Meta  -->
        <div class="flex justify-center mt-5">
          <div class="inline-flex">
            <Icon name="heroicons:calendar" class="mr-2" size="16" />
            <span>{{ formatDate(data.date) }}</span>
          </div>
          <div class="inline-flex ml-4">
            <Icon name="heroicons:user" class="mr-2" size="16" />
            <span>Jahid</span>
          </div>
        </div>
        <!-- ./ Post Meta   -->
        <!-- Post Thumbnail -->
        <div
          class="relative mt-5 h-[300px] lg:h-[400px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <NuxtImg
            :src="data.image"
            :alt="data.title"
            class="absolute w-full h-full object-cover"
            width="334px"
            height="188px"
            loading="lazy"
          ></NuxtImg>
        </div>
        <!-- ./ Post Thumbnail  -->
      </header>
      <!-- ./ Blog Header  -->

      <!-- Blog Content  -->
      <div class="mx-auto max-w-3xl">
        <Prose>
          <ContentRenderer :value="data" class="content blog" />
        </Prose>
      </div>
      <!-- ./ Blog Content  -->
    </article>
  </div>
</template>

<style>
.content {
  @apply text-base dark:text-white/80;
}
.content p,
.content ul,
.content ol,
.content pre,
.content iframe {
  @apply mb-4;
}
[itemprop="text"] {
}
.content ul {
  list-style-type: disc;
  padding: 0 0 0 21px;
  margin: 32px 0;
}
.content ul li {
  @apply mb-2;
}
.content ul li::marker {
  @apply text-white/50;
}

.content ol {
  list-style-type: decimal;
  padding: 0 0 0 21px;
}
.content ol li {
  @apply mb-2;
}
.content ol li::marker {
  @apply text-white/50;
}

.content * {
  scroll-margin-top: 100px;
}
.content img {
  @apply my-4 bg-white rounded-xl;
}

.content a {
  @apply border-b hover:border-primary-500;
}

.content h2 a,
.content h3 a,
.content h4 a,
.content h5 a,
.content h6 a {
  @apply border-none;
}
.content h2,
.content h3,
.content h4,
.content h5,
.content h6 {
  @apply mb-4;
}

.content pre {
  @apply bg-gray-200 dark:bg-white/10 rounded-xl p-4 overflow-x-auto;
}
</style>
