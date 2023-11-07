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
    <Head>
      <Title>{{ data?.title }}</Title>
      <Meta
        v-if="data?.meta_description"
        name="description"
        :content="data.meta_description"
      />

      <Meta
        v-if="data?.image"
        name="og:image"
        :content="data?.image"
        property="og:image"
      />

      <!-- Twiter Card -->

      <Meta
        v-if="data?.image"
        name="twitter:image"
        :content="data?.image"
        property="twitter:image"
      />

      <Meta
        v-if="data?.title"
        name="twitter:title"
        :content="data?.title"
        property="twitter:title"
      />

      <Meta
        v-if="data?.meta_description"
        name="twitter:description"
        :content="data?.meta_description"
        property="twitter:description"
      />
    </Head>

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
            <span>Jahid Anowar</span>
          </div>
        </div>
        <!-- ./ Post Meta   -->
        <!-- Post Thumbnail -->
        <div
          class="relative mt-5 h-[200px] md:h-[350px] lg:h-[400px] rounded-3xl overflow-hidden shadow-2xl"
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
        <Toc
          v-if="data.body.toc?.links"
          :links="data.body.toc.links"
          class="mb-5"
        />

        <ContentRenderer
          :value="data"
          class="content blog prose md:prose-lg lg:prose-xl"
        />
      </div>
      <!-- ./ Blog Content  -->
    </article>
  </div>
</template>

<style>
/* Only reference the code not the pre code */
code:not(pre code) {
  @apply bg-white/20 py-px px-1 rounded;
}
</style>
