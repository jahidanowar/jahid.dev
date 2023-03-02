<template>
  <div
    class="code-block transform relative my-5 !py-0 max-h-700px overflow-y-auto"
  >
    <slot />
  </div>
</template>

<style scoped>
.code-block:before {
  @apply absolute top-2 right-3 text-sm text-gray-500;
  content: attr(data-language);
}

:deep(pre) {
  counter-reset: number;
  margin: 0 !important;
}

.code-block--with-filename :deep(pre) {
  padding-top: 2em;
}

:deep(.code-block__filename) {
  @apply rounded text-xs px-2 py-1 absolute top-0 left-0 bg-gray-700/70 text-white;
}

:deep(.line:hover) {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
