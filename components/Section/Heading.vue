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
    class="section-heading mb-10"
    :class="action ? 'flex justify-between items-end' : ''"
  >
    <h2>
      <slot name="title">
        {{ title }}
      </slot>
    </h2>

    <NuxtLink
      v-if="action"
      :to="action.to"
      class="btn btn-default inline-flex items-center"
    >
      <slot name="action">
        <span>{{ action.text }}</span>
      </slot>
    </NuxtLink>
  </div>
</template>
