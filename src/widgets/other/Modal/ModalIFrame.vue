<template>
  <div>
    <iframe v-bind="props" width="900" height="450" />
  </div>
</template>

<script setup lang="ts">
interface IFrame {
  src: string;
}

const props = defineProps<IFrame>();

console.log(props);
</script>

<style scoped lang="scss"></style>
