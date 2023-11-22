<script setup lang="ts">
import useWp from "~/composable/useWp";

const { t } = useI18n();

const { data } = await useWp().getProjects();

if (!data.value?.length) {
  throw createError({
    statusCode: 404,
    message: t("error_404"),
  });
}
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
      description="Designed Web apps for Small and Medium Sized Business and did UI/UX enhancements to bring more customers to the business."
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
