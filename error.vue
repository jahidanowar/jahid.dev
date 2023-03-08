<script lang="ts" setup>
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });

useHead({
  title: `${props.error?.statusCode} - ${props.error?.message}`,
});
</script>

<template>
  <div class="container mx-auto py-20 grid place-content-center min-h-screen">
    <div>
      <template v-if="error && error.statusCode === '404'">
        <img src="/images/404.svg" class="mx-auto" width="400px" />
        <div class="flex justify-center mt-12">
          <NuxtLink
            to="/"
            class="btn btn-primary inline-flex items-center"
            @click="handleError"
          >
            <span>{{ $t("error_404_button") }}</span>
            <Icon name="system-uicons:wrap-back" size="20px" class="ml-2" />
          </NuxtLink>
        </div>
      </template>
    </div>
  </div>
</template>
