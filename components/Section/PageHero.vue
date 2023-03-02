<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
}>();
</script>
<template>
  <!-- Page Hero  -->
  <section class="page-hero py-12 pb-16 px-5 lg:px-0">
    <div class="lg:w-1/2 mx-auto text-center">
      <slot name="title">
        <h1 class="text-4xl font-bold">
          {{ title }}
        </h1>
      </slot>
      <slot name="description">
        <p v-if="description" class="mt-4 lg:w-2/3 mx-auto">
          {{ description }}
        </p>
      </slot>
    </div>
  </section>
  <!-- ./ Page Hero  -->
</template>
