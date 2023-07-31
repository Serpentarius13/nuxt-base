<template>
  <textarea
    class="text-small min-h-[18rem] w-full rounded-semi-big bg-white px-[2rem] py-[1.6rem] resize-none"
    v-model="model"
    :placeholder="placeholder"
    :defaultValue="initialValue"
  />
</template>

<script setup lang="ts">
const props = defineProps<{ placeholder: string; initialValue?: string }>();

const model = defineModel({
  required: true,
  default: "",
});
</script>

<style scoped lang="scss"></style>
