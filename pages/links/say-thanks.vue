<script lang="ts" setup>
definePageMeta({
  layout: "canvas",
});

useHead({
  title: "Say Thanks",
  titleTemplate: "",
  meta: [
    {
      name: "description",
      content:
        "If you like my work, you can support me continue making more free content.",
    },
  ],
});
</script>
<template>
  <div class="page page-bio">
    <div class="bg-noise"></div>

    <div class="bio max-w-md mx-auto h-screen grid place-items-center relative">
      <div class="bio-inner px-8 lg:px-0 py-4">
        <header class="bio-header mb-6 lg:w-3/4">
          <h1 class="text-xl mb-4">Suport me to support you</h1>
          <p>
            If you like my work, you can support me continue making more free
            content.
          </p>
        </header>

        <!-- Latest Youtube Video  -->
        <div
          class="mb-6 card rounded-xl bg-white dark:bg-white/10 p-5 shadow border dark:border-white/20"
        >
          <Form v-slot="{ errors, isSubmitting }">
            <TextFormField
              :label="$t('email')"
              name="email"
              type="text"
              placeholder="Enter your email"
              :error="errors.email"
            />
            <TextFormField
              :label="$t('amount')"
              name="amount"
              type="number"
              placeholder="Enter amount"
              :error="errors.email"
            />
            <ButtonIcon
              type="submit"
              class="btn-primary block w-full justify-center"
              :loading="isSubmitting"
            >
              {{ $t("donate") }}
            </ButtonIcon>
          </Form>
        </div>
        <!-- ./ Latest Youtube Video  -->
      </div>

      <LinkNavigation />
    </div>
  </div>
</template>

<style scoped>
.glass {
  @apply bg-white  dark:bg-white/20 backdrop-blur border-black/10 dark:border-white/20;
}
</style>
