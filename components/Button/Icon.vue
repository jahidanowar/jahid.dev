<script setup lang="ts">
defineProps({
  nuxtLink: {
    type: Boolean,
    default: false,
  },
  iconPosition: {
    type: String,
    default: "right",
  },
  icon: {
    type: String,
    default: "heroicons:arrow-right",
  },
  iconSize: {
    type: String,
    default: "16",
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <button
    v-if="!nuxtLink"
    class="btn group inline-flex items-center"
    :disabled="loading"
  >
    <template v-if="loading">
      <svg
        class="animate-spin h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </template>
    <template v-else>
      <template v-if="iconPosition === 'left'">
        <slot name="icon">
          <Icon
            :name="icon"
            :size="iconSize"
            class="mr-2 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
          />
        </slot>
      </template>
      <slot></slot>
      <template v-if="iconPosition === 'right'">
        <slot name="icon">
          <Icon
            :name="icon"
            :size="iconSize"
            class="ml-2 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
          />
        </slot>
      </template>
    </template>
  </button>
  <NuxtLink v-else class="btn group inline-flex items-center">
    <template v-if="iconPosition === 'left'">
      <slot name="icon">
        <Icon
          :name="icon"
          :size="iconSize"
          class="mr-2 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
        />
      </slot>
    </template>
    <slot></slot>
    <template v-if="iconPosition === 'right'">
      <slot name="icon">
        <Icon
          :name="icon"
          :size="iconSize"
          class="ml-2 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
        />
      </slot>
    </template>
  </NuxtLink>
</template>
