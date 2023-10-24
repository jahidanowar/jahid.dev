<script setup lang="ts">
import type { Lang } from "shiki-es";

defineProps<{
  code: string;
  language: Lang;
  filename?: string;
  highlights?: number[];
  meta?: string;
}>();

const hovered = ref(false);
</script>

<template>
  <div
    :class="`highlight-${language}`"
    class="group relative text-sm"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <span
      v-show="filename"
      class="absolute top-0 right-0 p-1 font-mono rounded-lg text-xs leading-normal transition-opacity duration-200 backdrop-blur group-hover:opacity-0 mt-1 mr-1"
    >
      {{ filename }}
    </span>
    <slot />

    <ProseCodeCopyBtn :content="code" />
  </div>
</template>
