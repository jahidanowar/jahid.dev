<script lang="ts" setup>
const { t } = useI18n();

const isOpen = ref(false);

const navigation = ref<Navigation[]>([
  {
    label: t("navigation.blog"),
    to: "/blog",
  },
  {
    label: t("navigation.videos"),
    to: "/videos",
  },
  {
    label: t("navigation.projects"),
    to: "/projects",
  },
  {
    label: t("navigation.contact"),
    to: "/contact",
  },
]);
</script>

<template>
  <nav
    class="navbar bg-white/10 dark:bg-black/10 backdrop-blur-md border-b border-black/10 dark:border-white/10 w-full fixed top-0 z-50 py-3"
  >
    <div
      class="container flex justify-between items-center flex-col lg:flex-row"
    >
      <div class="flex justify-between w-full">
        <!-- Logo  -->
        <div class="logo">
          <NuxtLink to="/">
            <Logo height="20px" />
          </NuxtLink>
        </div>
        <!-- ./ Logo  -->

        <button class="toggle-button lg:hidden" @click="isOpen = !isOpen">
          <Icon v-if="!isOpen" name="heroicons:bars-2" size="24" />
          <Icon v-else name="heroicons:x-mark" size="24" />
        </button>
      </div>

      <div class="navbar-nav" :class="isOpen ? 'block' : 'hidden lg:block'">
        <ul class="flex items-center gap-5">
          <li v-for="item in navigation" :key="item.label">
            <NuxtLink :to="item.to" class="nav-link">
              {{ item.label }}
            </NuxtLink>
          </li>
          <li class="leading-none">
            <ColorSwitcher />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
