<script lang="ts" setup>
const colorMode = useColorMode();

const menus = ref([
  {
    title: "Home",
    url: "/",
    icon: "solar:home-2-outline",
  },
  {
    title: "Projects",
    url: "/portfolio",
    icon: "solar:folder-with-files-outline",
  },
  {
    title: "Blog",
    url: "/blog",
    icon: "solar:document-add-outline",
  },
  {
    title: "Contact",
    url: "/contact",
    icon: "solar:call-chat-outline",
  },
]);
</script>
<template>
  <nav
    class="bio-menu sticky w-full top-10 bottom-2 left-0 right-0 px-8 lg:px-0"
  >
    <div
      class="bg-white hover:bg-gray-50 dark:bg-white/10 backdrop-blur border border-black/5 dark:border-white/10 flex justify-between items-center py-2 px-3 rounded-xl transition-all duration-300 mt-10"
    >
      <div class="inline-flex gap-4">
        <a
          v-for="menu in menus"
          :key="menu.url"
          :href="menu.url"
          :title="menu.title"
          class="rounded-full p-1.5 hover:text-primary-500 transition-all duration-300"
        >
          <Icon :name="menu.icon" size="24"></Icon>
        </a>
      </div>

      <button
        class="rounded-full p-1.5 hover:text-primary-500 transition-all duration-300 transform hover:rotate-90"
        @click="
          colorMode.preference =
            colorMode.preference === 'dark' ? 'light' : 'dark'
        "
      >
        <Icon v-if="colorMode.value === 'dark'" name="ph:sun" size="24"></Icon>
        <Icon v-else name="ph:moon" size="24"></Icon>
      </button>
    </div>
  </nav>
</template>

<style></style>
