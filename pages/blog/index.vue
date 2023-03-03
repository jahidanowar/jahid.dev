<script setup lang="ts"></script>

<template>
  <div class="archive blog blog-archive py-24">
    <Head>
      <Title>Full Stack Blog - Vue.js, Nuxt.js, Node.js & Typescript</Title>
      <Meta
        name="description"
        content="I write articles about Website Design, Development , Laravel, Vue, Nuxt.js and WordPress Related Articles Related Articles, Tips , Web Hosting deals coupons and more."
      />
    </Head>
    <!-- Page Hero  -->
    <SectionPageHero
      title="Website Design, and Full Stack Development Articles."
      description="Get Website Design, Development, Nodejs, Vue and Typescript Related
          Articles, Tips, Web Hosting deals coupons and more."
    />
    <!-- ./ Page Hero  -->
    <section class="blog">
      <div class="container mx-auto">
        <!-- Blog List  -->
        <ContentList
          path="/blog"
          :query="{
            limit: -1,
            fields: ['title', 'image', 'date'],
            sort: [
              {
                date: -1,
              },
            ],
          }"
          v-slot="{ list }"
        >
          <div class="grid lg:grid-cols-3 gap-5">
            <CardBlog
              v-for="blog in list"
              :key="blog._path"
              class="lg:col-span-1"
              :blog="blog"
            />
          </div>
        </ContentList>
        <!-- ./ Blog List  -->
      </div>
    </section>
  </div>
</template>
