<template>
  <Swiper
    :modules="[SwiperNavigation, SwiperPagination]"
    :pagination="hasPagination"
    :navigation="hasNavigation ? { prevEl: '.prev', nextEl: '.next' } : false"
    v-bind="options"
    class="relative"
    ref="swiperRef"
    @slide-change="switchSlide"
  >
    <SwiperSlide v-for="(slide, ix) in slides" :key="ix">
      <slot :slide="slide" />
    </SwiperSlide>

    <div class="swip-navigation" v-if="hasNavigation">
      <button class="prev">
        <NuxtIcon name="main/gt" class="rotate-180 text-black" />
      </button>

      <button class="next">
        <NuxtIcon name="main/gt" class="text-black" />
      </button>
    </div>
  </Swiper>
</template>

<script setup lang="ts">
import type { Swiper } from "swiper/types";

interface ISwiper {
  options?: any;
  slides: any[];
  hasPagination?: boolean;
  hasNavigation?: boolean;
}

const props = withDefaults(defineProps<ISwiper>(), { options: {} });

const swiperRef = ref<Swiper | null>();

const activeIndex = ref<number>(0);

const switchSlide = (swiper: Swiper) =>
  (activeIndex.value = swiper.activeIndex);

const isLeftArrowVisible = computed<boolean>(() => activeIndex.value >= 2);

const isRightArrowVisible = computed<boolean>(() => props.slides.length > 3);
</script>

<style lang="scss">
.swiper {
  width: 100%;
  height: 100%;

  --swiper-pagination-bottom: 6.2rem;
  --swiper-pagination-bullet-horizontal-gap: 0.6rem;

  &-slide {
    @apply mx-auto flex items-center justify-center;
  }

  &-pagination {
    &-bullet {
      @apply aspect-square w-[0.7rem] rounded-[5rem] transition-all;
      opacity: 0.4000000059604645;
      background: #d9d9d9;

      &-active {
        @apply w-[4.4rem] opacity-100;
      }
    }
  }
}

.swip-navigation {
  button {
    @apply absolute top-1/2 z-[20] flex aspect-square w-[5.8rem]  -translate-y-1/2 items-center justify-center rounded-full  bg-white transition-all;

    &.prev {
      @apply left-[1rem];
    }

    &.next {
      @apply right-[1rem];
    }

    &:disabled {
      @apply opacity-0;
    }
  }
}
</style>
