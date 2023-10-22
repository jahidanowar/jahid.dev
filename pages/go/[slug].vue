<script lang="ts" setup>
import useWp from "~/composable/useWp";

const { t } = useI18n();
const { slug } = useRoute().params;

if (!slug) {
  throw createError({
    statusCode: 404,
    message: t("error_404"),
  });
}
const { data } = await useWp().getLink(slug as string);

if (!data.value?.length) {
  throw createError({
    statusCode: 404,
    message: t("error_404"),
    fatal: true,
  });
}

onMounted(() => {
  if (data.value?.length && window) {
    window.location.href = data.value[0]._ta_destination_url;
  }
});
</script>
<template>
  <div v-if="data" class="h-screen grid place-content-center">
    {{
      $t("redirecting_to", {
        url: data[0].link,
      })
    }}
  </div>
</template>

<style></style>
