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
});
</script>
<template>
  <button v-if="!nuxtLink" class="btn group inline-flex items-center">
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
