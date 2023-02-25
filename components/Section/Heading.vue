<script setup lang="ts">
import { RouteLocationRaw } from "vue-router";

defineProps<{
  title: string;
  action?: {
    text: string;
    to: RouteLocationRaw;
  };
}>();
</script>

<template>
  <div
    class="section-heading heading-spacing"
    :class="
      action
        ? 'flex items-center md:justify-between md:items-end flex-col md:flex-row gap-5'
        : ''
    "
  >
    <h2 class="md:w-1/2 text-center md:text-left">
      <slot name="title">
        {{ title }}
      </slot>
    </h2>

    <div>
      <NuxtLink
        v-if="action"
        :to="action.to"
        class="btn btn-default inline-flex items-center group"
      >
        <slot name="action">
          <span>{{ action.text }}</span>
        </slot>
      </NuxtLink>
    </div>
  </div>
</template>
