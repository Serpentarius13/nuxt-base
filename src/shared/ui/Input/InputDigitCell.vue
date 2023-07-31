<template>
  <div
    :class="[
      'text-bigger relative aspect-square w-[7.2rem]  rounded-small font-bold  text-black transition-all',
      digitPassed ? 'bg-yellow' : 'gradiented',
    ]"
  >
    <Transition name="roll">
      <div v-if="digitPassed" class="absolute-center">{{ digit }}</div>

      <div
        class="absolute-center aspect-square w-[1.4rem] rounded-full bg-black"
        v-else
      ></div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
interface IInputDigitCell {
  digit?: number | null;
}

const props = defineProps<IInputDigitCell>();

const digitPassed = computed<boolean>(() => !!props.digit || props.digit === 0);
</script>

<style scoped lang="scss">
.gradiented {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.12) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}

.roll {
  &-enter-from {
    transform: translateY(-50%);
    opacity: 0;
  }

  &-leave-to {
    transform: translateY(50%);
    opacity: 0;
  }

  &-enter-active,
  &-leave-active {
    @apply transition-all;
  }
}
</style>
