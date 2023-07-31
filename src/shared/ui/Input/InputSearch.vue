<template>
  <label class="relative">
    <input
      type="search"
      v-model="model"
      class="borderline-transparent text-medium w-full rounded-semi-big bg-white p-[2rem] pl-[5.2rem] ring-black focus:outline-none focus:ring-1"
      :placeholder="placeholder"
    />

    <button @click="emit('search')">
      <NuxtIcon
        name="input/search"
        class="absolute left-[2rem] top-1/2 -translate-y-1/2"
      />
    </button>
  </label>
</template>

<script setup lang="ts">
const model = defineModel<string>({ required: true });

const emit = defineEmits<{ search: [] }>();

defineProps<{placeholder: string}>()
</script>

<style scoped lang="scss"></style>
