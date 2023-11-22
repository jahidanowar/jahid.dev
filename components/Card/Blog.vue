<script setup lang="ts">
defineProps<{
  blog: Blog;
}>();
</script>

<template>
  <article class="bg-white/5 border dark:border-white/10 p-5 rounded-3xl">
    <NuxtImg
      :src="blog.image"
      :alt="blog.title"
      class="rounded-2xl mb-5 shadow-xl w-full"
      width="334px"
      height="188px"
      loading="lazy"
      :placeholder="[50, 25, 75, 5]"
    ></NuxtImg>
    <!-- Blog Meta -->
    <div class="inline-flex items-center mb-2">
      <div class="inline-flex items-center">
        <Icon name="heroicons:calendar" class="mr-2" size="16" />
        <span>{{ formatDate(blog.date) }}</span>
      </div>
      <div class="inline-flex items-center ml-4">
        <Icon name="heroicons:user" class="mr-2" size="16" />
        <span>{{ blog.author }}</span>
      </div>
    </div>
    <!-- ./ Blog Meta  -->
    <NuxtLink :to="blog._path" class="block">
      <h3 class="text-lg leading-tight font-bold">
        {{ blog.title }}
      </h3>
    </NuxtLink>
  </article>
</template>
