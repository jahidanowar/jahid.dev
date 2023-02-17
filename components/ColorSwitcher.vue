<script setup>
const isDark = ref(null);
const colorMode = useColorMode();
const watchColorChanges = (e) => {
  isDark.value = e.matches;
};
onMounted(() => {
  isDark.value =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", watchColorChanges);
});
</script>
<template>
  <button type="button" class="relative group">
    <div>
      <Icon
        v-if="colorMode.value === 'light'"
        name="circum:light"
        size="20px"
        class="group-hover:rotate-180 transition-all duration-300 ease-in-out"
      />
      <Icon
        v-else
        name="circum:dark"
        size="20px"
        class="group-hover:rotate-180 transition-all duration-300 ease-in-out"
      />

      <ul
        class="scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out absolute z-50 bottom-full sm:bottom-auto right-0 sm:top-6 sm:-right-10 w-36 cursor-pointer rounded-lg p-2 bg-white dark:bg-black/90 border dark:border-white/10 sm:shadow-lg backdrop-blur-md"
      >
        <li
          class="flex items-center w-full h-ful hover:bg-gray-100 hover:dark:bg-white/20 p-2 rounded-lg transition-all duration-300 ease-in-out"
          :class="{ 'text-primary-500': colorMode.preference === 'light' }"
          @click="colorMode.preference = 'light'"
        >
          <Icon name="circum:light" size="20px" class="mr-2" />
          Light
        </li>
        <li
          class="flex items-center w-full h-full hover:bg-gray-100 hover:dark:bg-white/20 p-2 rounded-lg transition-all duration-300 ease-in-out"
          :class="{ 'text-primary-500': colorMode.preference === 'dark' }"
          @click="colorMode.preference = 'dark'"
        >
          <Icon name="circum:dark" size="20px" class="mr-2" />
          Dark
        </li>
        <li
          class="flex items-center w-full h-full hover:bg-gray-100 hover:dark:bg-white/20 p-2 rounded-lg transition-all duration-300 ease-in-out"
          :class="{ 'text-primary-500': colorMode.preference === 'system' }"
          @click="colorMode.preference = 'system'"
        >
          <Icon name="circum:monitor" size="20px" class="mr-2" />
          System
        </li>
      </ul>
    </div>
  </button>
</template>
