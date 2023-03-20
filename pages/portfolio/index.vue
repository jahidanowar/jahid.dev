<script setup lang="ts">
const { data } = await useFetch(
  "https://api.jahid.dev/wp-json/wp/v2/project?_embed=1"
);
</script>

<template>
  <div class="archive portfolio portfolio-archive py-24">
    <Head>
      <Title>Portfolio</Title>
      <Meta
        name="description"
        content="Jahid is a Fullstack developer, Designing Website for Business and making UI/UX enhancements to bring more customers to the business."
      />
    </Head>

    <!-- Page Hero  -->
    <SectionPageHero
      title="Portfolio"
      description="Designed Website for Small and Medium Sized Business and did UI/UX enhancements to bring more customers to the business."
    />
    <!-- ./ Page Hero  -->
    <div v-if="data" class="container mx-auto my-20 px-6">
      <CardPortfolio
        v-for="(portfolio, i) in data"
        :key="i"
        :portfolio="portfolio"
      />
    </div>
  </div>
</template>
