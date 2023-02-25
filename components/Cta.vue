<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  button: {
    text: string;
    link: string;
  };
  icon?: string;
}>();
</script>

<template>
  <div
    class="py-5 px-8 text-center rounded-3xl bg-gradient-to-r from-primary-500 to-teal-500 dark:from-primary-600 dark:to-teal-600 flex flex-col justify-center items-center text-white"
  >
    <Icon name="ic:outline-waving-hand" size="40" />
    <h3 class="my-2">{{ title }}</h3>
    <p>{{ description }}</p>
    <NuxtLink
      :to="button.link"
      class="btn btn-default mt-5 inline-flex items-center group !text-white"
    >
      <span class="text-white">{{ button.text }}</span>
      <Icon
        name="heroicons:arrow-right"
        size="16"
        class="ml-1 group-hover:translate-x-1 duration-300"
      />
    </NuxtLink>
  </div>
</template>
