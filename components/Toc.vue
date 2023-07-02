<script lang="ts" setup>
defineProps<{
  links: { id: string; text: string }[];
  title?: string;
}>();

const tocEl = ref<HTMLElement | null>(null);
const tocToggle = ref<boolean | undefined>(false);

onMounted(() => {
  // When the user scroll to the article section then show the toc for one time

  if (document.querySelector(".content h2") === null) {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      if (window.innerWidth < 768) {
        return;
      }
      tocToggle.value = true;
      observer.disconnect();
    }
  });

  observer.observe(document.querySelector(".content h2")!);
});
</script>
<template>
  <div
    ref="tocEl"
    class="fixed right-[1%] bottom-0 lg:bottom-auto lg:top-[10%] md:max-w-xs"
  >
    <template v-if="tocToggle">
      <div
        class="card p-4 rounded-xl border dark:border-white/20 bg-white/10 backdrop-blur"
      >
        <div class="flex justify-between items-center">
          <h2 class="block leading-none !text-xl">
            {{ title || "Tabe of content" }}
          </h2>
          <button
            aria-label="toggle table of content"
            class="rounded-lg hover:bg-white/10 absolute right-2 top-2 w-8 h-8 grid place-content-center"
            @click="tocToggle = !tocToggle"
          >
            <Icon name="solar:minimize-bold-duotone" size="20" />
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
    <template v-else>
      <button
        aria-label="toggle table of content"
        title="Table of content"
        class="flex items-center bg-white/10 rounded-xl p-2 hover:bg-white/20 backdrop-blur"
        @click="tocToggle = !tocToggle"
      >
        <span class="lg:hidden mr-2">Table of content</span>
        <Icon name="solar:bill-list-line-duotone" size="32" />
      </button>
    </template>
  </div>
</template>

<style></style>
