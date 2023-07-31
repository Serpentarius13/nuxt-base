<template>
  <div class="relative">
    <input
      type="range"
      id="input-left"
      :min="min"
      :max="max"
      v-model="inputLeft"
    />
    <input
      type="range"
      id="input-right"
      :min="min"
      :max="max"
      v-model="inputRight"
    />

    <div class="slider">
      <div class="slider__track"></div>
      <div
        class="slider__range"
        :style="{ ...leftStyleComputed, ...rightStyleComputed }"
      ></div>
      <div
        class="slider__thumb slider__thumb-left"
        :style="leftStyleComputed"
      ></div>
      <div
        class="slider__thumb slider__thumb-right"
        :style="rightStyleComputed"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IRangeInput {
  min: string;
  max: string;
}

const emit = defineEmits<{min: [num: string], max: [num: string]}>();

const props = defineProps<IRangeInput>();

const inputLeft = ref<string>("1");
const inputRight = ref<string>("12");

watch(inputLeft, () => {
  if (+inputLeft.value >= +inputRight.value)
    inputLeft.value = String(+inputRight.value - 1);

  emit("min", inputLeft.value);
});

watch(inputRight, () => {
  if (+inputRight.value <= +inputLeft.value)
    inputRight.value = String(+inputLeft.value + 1);

  emit("max", inputRight.value);
});

const makePercent = (value: number) =>
  ((value - +props.min) / (+props.max - +props.min)) * 100;

const leftStyleComputed = computed<{ left: string }>(() => {
  return { left: `${makePercent(+inputLeft.value)}%` };
});

const rightStyleComputed = computed<{ right: string }>(() => {
  return { right: `${100 - makePercent(+inputRight.value)}%` };
});
</script>

<style lang="scss" scoped>
.slider {
  @apply relative z-[1] mx-[1.5rem] h-[1.25px];

  &__track {
    @apply absolute inset-0 z-[1] m-auto rounded-[0.5rem] bg-gray-400;
  }

  &__range {
    background-color: #3c54ff;

    @apply absolute bottom-0 top-0 z-[2] rounded-[0.5rem];
  }

  &__thumb {
    border: 1px solid rgba(33, 33, 33, 0.15);

    @apply absolute z-[3] aspect-square w-[2.4rem]  rounded-full bg-white;

    &::after {
      content: "";
      @apply absolute inset-0 z-[5] m-auto aspect-square w-[1rem] rounded-full bg-black;
    }

    &-left {
      transform: translate(-15px, -10px);
    }

    &-right {
      transform: translate(15px, -10px);
    }
  }
}

.slider > .thumb.hover {
  box-shadow: 0 0 0 20px rgba(98, 0, 238, 0.1);
}
.slider > .thumb.active {
  box-shadow: 0 0 0 40px rgba(98, 0, 238, 0.2);
}

input[type="range"] {
  @apply pointer-events-none absolute z-[2] h-[1rem] w-full appearance-none opacity-0;
}
input[type="range"]::-webkit-slider-thumb {
  pointer-events: all;

  @apply aspect-square w-[3rem] cursor-e-resize appearance-none border-r-0 border-none;
}
</style>
