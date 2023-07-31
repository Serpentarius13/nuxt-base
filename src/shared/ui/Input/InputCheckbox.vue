<template>
  <label :class="[model && '', 'flex cursor-pointer items-center gap-[1rem]']">
    <input
      type="checkbox"
      class="peer hidden"
      v-model="model"
      :checked="model"
    />

    <span
      class="borderline-transparent flex h-[1.8rem] w-[1.8rem] items-center justify-center"
    >
      <Transition name="fade">
        <NuxtIcon
          name="input/check"
          class="aspect-square w-[1.4rem] text-black"
          v-if="model"
        />
      </Transition>
    </span>

    <span class="text-small">
      {{ label }}
    </span>
  </label>
</template>

<script setup lang="ts">
const model = defineModel<boolean>();

defineProps<{ label: string }>();
</script>

<style scoped lang="scss"></style>
