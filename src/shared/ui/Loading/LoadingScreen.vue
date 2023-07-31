<template>
  <Transition name="fade">
    <div class="flex h-screen w-screen items-center justify-center bg-white" v-if="isLoading">
      <CommonLoading size="48" duration="1000" />
    </div>
  </Transition>
</template>

<script setup lang="ts">


defineProps<{isLoading: boolean}>()
</script>

<style scoped lang="scss"></style>
