<script lang="ts" setup>
defineProps<{
  link: {
    title: string;
    url: string;
    icon: string;
  };
}>();
</script>
<template>
  <a
    :href="link.url"
    target="_blank"
    class="flex py-3 px-4 w-full rounded-xl border gap-4 justify-between text-base glass transition-all duration-300 group"
  >
    <span> {{ link.title }}</span>
    <Icon
      :name="link.icon"
      size="24"
      class="group-hover:scale-110 transition-all duration-200"
    ></Icon>
  </a>
</template>

<style></style>
