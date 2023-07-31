<template>
  <button :class="classes">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { ButtonAdditions, ButtonSizes, ButtonThemes } from "./buttonThemes";

type ButtonProps = {
  size?: ButtonSizes;
  theme?: ButtonThemes;
  additions?: ButtonAdditions | ButtonAdditions[];
};

const props = withDefaults(defineProps<ButtonProps>(), {
  size: ButtonSizes.medium,
  theme: ButtonThemes.purple,
  additions: ButtonAdditions.none,
});

const fontSizes: Record<ButtonSizes, string> = {
  medium: "text-medium",
};

const classes = computed(() => {
  const classesArr = [
    props.size,
    props.theme,
    fontSizes[props.size],
    props.additions,
    "btn transition-standard",
  ];

  if (typeof props.additions === "string") {
    classesArr.push(props.additions);
  } else {
    props.additions.forEach((v) => classesArr.push(v));
  }
  return classesArr;
});
</script>

<style lang="scss" scoped>
.btn {
  @apply flex w-fit items-center justify-center border-2 border-solid border-transparent outline-none;

  // themes

  &.purple {
    @apply bg-purple text-white hover:border-white hover:border-opacity-40 hover:bg-transparent;
  }

  &.outline {
    @apply border-white border-opacity-40 bg-transparent text-white hover:border-transparent hover:bg-purple;
  }

  &.yellow {
    background: radial-gradient(
        42.56% 215.72% at 92.43% 82.5%,
        rgba(255, 255, 255, 0.2) 0%,
        rgba(0, 0, 0, 0) 100%
      )
      #ffda00;

    box-shadow: 0px 7px 114px rgba(255, 218, 0, 0.45);

    @apply rounded-big text-black;

    &:hover {
      box-shadow: 0px 7px 50px rgba(255, 218, 0);
    }

    &.unshadowed {
      box-shadow: none !important;

      &:hover {
        box-shadow: none !important;
        @apply border-2 border-yellow bg-transparent;
      }
    }

    &.unhovering {
      &:hover {
        box-shadow: none !important;
        background: radial-gradient(
            42.56% 215.72% at 92.43% 82.5%,
            rgba(255, 255, 255, 0.2) 0%,
            rgba(0, 0, 0, 0) 100%
          )
          #ffda00;
      }
    }
  }

  &.white {
    @apply bg-white text-black hover:text-white hover:bg-transparent border-[1px] border-transparent hover:border-white;

    &.unhovering {
      @apply hover:bg-white hover:text-black;
    }
  }

  // sizes

  &.medium {
    @apply h-[6.6rem]  w-[20.1rem] rounded-big lg:w-[17rem];
  }

  // styles
}

.btn.btn {
  &:disabled {
    @apply cursor-default bg-gray-400 text-white shadow-none hover:border-none hover:bg-gray-400 hover:shadow-none hover:outline-none;
  }
}
</style>