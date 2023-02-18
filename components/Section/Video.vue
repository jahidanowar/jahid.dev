<template>
  <div class="container pb-12">
    <SectionHeading
      title="Blogs"
      :action="{
        text: 'View All',
        to: '/videos',
      }"
    >
      <template #title>
        Code with Me <br class="hidden lg:block" />
        <span class="text-primary-500">Learn Coding through Video Lessons</span>
      </template>
      <template #action>
        <span>Subscribe now</span>
        <Icon name="heroicons:arrow-right" size="16" class="ml-1" />
      </template>
    </SectionHeading>

    <!-- Video List  -->

    <!-- ./ Video List  -->
  </div>
</template>
