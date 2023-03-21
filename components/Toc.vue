<script lang="ts" setup>
import { useDraggable } from "@vueuse/core";

defineProps<{
  links: { id: string; text: string }[];
  title?: string;
}>();

const tocEl = ref<HTMLElement | null>(null);
const tocToggle = ref<boolean>(false);

const innerWidth = process.client ? window.innerWidth : 200;
const { x, y, style } = useDraggable(tocEl, {
  initialValue: { x: innerWidth / 50, y: 80 },
  preventDefault: true,
});

onMounted(() => {
  window?.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;

    // Check if it is on phone
    if (innerWidth < 768) {
      return;
    }

    if (scrollPos > 20) {
      tocToggle.value = true;
    } else {
      tocToggle.value = false;
    }
  });
});
</script>
<template>
  <div
    ref="tocEl"
    class="card rounded-xl border p-5 dark:border-white/20 bg-white/10 backdrop-blur"
    :class="{
      'lg:sticky top-16 left-0': !tocToggle,
      'fixed cursor-move left-[1%] top-[10%] md:max-w-xs': tocToggle,
    }"
    :style="style"
  >
    <div class="flex justify-between items-center">
      <h2 class="block leading-none !text-xl">
        {{ title || "Tabe of content" }}
      </h2>
      <button
        aria-label="toggle table of content"
        class="rounded-xl hover:bg-white/20 absolute right-2 top-2 w-8 h-8 grid place-content-center"
        @click="tocToggle = !tocToggle"
      >
        <Icon v-if="tocToggle" name="heroicons:arrows-pointing-in-solid" />
        <Icon v-else name="heroicons:arrow-top-right-on-square" />
      </button>
    </div>
    <ul class="toc-nav pl-1 mt-5">
      <li v-for="item in links" :key="item.id" class="mb-2">
        <a :href="`#${item.id}`" class="hover:text-primary-500">{{
          item.text
        }}</a>
        <ul v-if="(item as any).children" class="mt-2 ml-2">
          <li
            v-for="child in (item as any).children"
            :key="child.id"
            class="mb-2"
          >
            <a :href="`#${child.id}`" class="hover:text-primary-500"
              >- {{ child.text }}</a
            >
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
