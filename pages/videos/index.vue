<template>
  <div class="archive blog blog-archive py-24">
    <Head>
      <Title>{{ $t("videos") }}</Title>
      <Meta
        name="description"
        content="Learn Programming through Video Lessons"
      />
    </Head>
    <!-- Page Hero  -->
    <SectionPageHero
      title="Code with me"
      description="Learn Programming through Video Lessons"
    />
    <!-- ./ Page Hero  -->
    <section class="blog">
      <div class="container mx-auto">
        <!-- Blog List  -->
        <ContentList
          path="/videos"
          :query="{
            limit: -1,
            fields: ['title', 'image', 'date', 'type'],
            sort: [
              {
                date: -1,
              },
            ],
          }"
          v-slot="{ list }"
        >
          <div class="grid lg:grid-cols-2 gap-10">
            <CardVideo
              v-for="video in list"
              :key="video._path"
              :video="video"
              class="border dark:border-white/5"
            />
          </div>
        </ContentList>
        <!-- ./ Blog List  -->
      </div>
    </section>
  </div>
</template>
