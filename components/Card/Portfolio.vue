<script setup lang="ts">
const { $localePath } = useNuxtApp();

defineProps<{
  portfolio: any;
}>();
</script>

<template>
  <div
    class="group portfolio flex flex-wrap mb-16 align-middle hover:no-underline focus:no-underline"
  >
    <div class="w-full md:w-6/12 relative h-64 md:h-96">
      <NuxtImg
        :src="portfolio._embedded['wp:featuredmedia']['0'].source_url"
        :alt="portfolio.title.rendered"
        :placeholder="[50, 25, 75, 5]"
        class="absolute object-cover w-full h-full rounded-2xl transform duration-200 group-hover:-translate-y-2 group-hover:shadow-xl"
      />
    </div>
    <div class="w-full md:w-5/12 mt-5 md:mt-0 md:ml-10 self-center">
      <h3
        class="text-2xl md:text-4xl font-normal leading-tight group-hover:underline"
      >
        {{ portfolio.title.rendered }}
      </h3>
      <div class="mt-5" v-html="portfolio.excerpt.rendered"></div>
      <NuxtLink
        :to="
          $localePath({
            name: 'portfolio-slug',
            params: { slug: portfolio.slug },
          })
        "
        class="mt-5 text-primary inline-flex items-center group-hover:underline duration-200"
      >
        View Project
        <svg
          class="w-4 h-4 ml-2 transform group-hover:translate-x-2 duration-200"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>
