<script setup lang="ts">
defineProps<{
  testimonial: Testimonial;
}>();
</script>

<template>
  <div
    class="testimonial-card dark:border-white/20 border p-10 rounded-3xl bg-gradient-to-tr"
    :class="testimonial.gradient"
  >
    <div
      class="testimonial-wrapper min-h-[280px] lg:py-5 cursor-grab focus:cursor-grabbing"
    >
      <p class="text-base lg:text-xl">
        {{ testimonial.content }}
      </p>
      <div class="testimonial-meta flex items-center mt-8">
        <NuxtImg
          :src="testimonial.image"
          class="rounded-full w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]"
          width="100"
          height="100"
        />
        <div class="ml-4">
          <h4 class="text-lg font-semibold">{{ testimonial.name }}</h4>
          <p class="text-sm opacity-80 leading-tight">
            {{ testimonial.designation }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
