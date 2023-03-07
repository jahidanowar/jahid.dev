<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { Field } from "vee-validate";
defineProps<{
  name: string;
  prependIcon?: string;
  appendIcon?: string;
  label?: string;
  error?: string;
}>();
</script>

<template>
  <div
    class="form-group"
    :class="{
      error: error,
    }"
  >
    <label v-if="label" :for="name"> {{ label }}</label>
    <div class="relative">
      <button
        v-if="prependIcon"
        class="absolute inset-y-0 left-0 flex items-center pl-3"
      >
        <slot name="prependIcon">
          <Icon :name="prependIcon" class="w-5 h-5 text-gray-400" />
        </slot>
      </button>
      <Field :name="name" v-bind="$attrs" class="form-control" />
      <button
        v-if="appendIcon"
        class="absolute inset-y-0 right-0 flex items-center pr-3"
      >
        <slot name="appendIcon">
          <Icon :name="appendIcon" class="w-5 h-5 text-gray-400" />
        </slot>
      </button>
    </div>
    <span v-if="error" class="error-message">{{ error }}</span>
  </div>
</template>
