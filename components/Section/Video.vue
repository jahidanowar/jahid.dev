<script lang="ts" setup></script>
<template>
  <div class="container pb-12 overflow-x-hidden">
    <!-- Video List  -->
    <ContentList
      path="/videos"
      :query="{
        limit: 5,
        fields: ['title', 'image', 'date', 'type'],
        sort: [
          {
            date: -1,
          },
        ],
      }"
      v-slot="{ list }"
    >
      <div class="grid lg:grid-cols-2 gap-5 lg:gap-12">
        <div class="text-center md:text-left lg:px-10 heading-spacing">
          <h2>Code with me</h2>
          <p class="mt-2">Learn coding through interactive video lessons</p>
          <ButtonIcon class="mt-5" nuxt-link to="/video">View All</ButtonIcon>
        </div>
        <CardVideo
          v-for="video in list"
          :key="video._path"
          :video="video"
          class="border dark:border-white/10"
        />
      </div>
    </ContentList>

    <!-- ./ Video List  -->
  </div>
</template>

<style scoped>
.video-card:nth-child(2n + 3) {
  margin-top: -38%;
}

@media screen and (max-width: 768px) {
  .video-card:nth-child(2n + 3) {
    margin-top: 0;
  }
}
</style>
