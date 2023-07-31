<template>
  <SharedUiNavbar :is-homepage="true" />
  <main class="pt-[20.6rem] lg:pt-[15rem]">
    <slot />
  </main>
</template>

<script lang="ts" setup>
definePageMeta({ layout: "default" });
</script>

<style lang="scss" scoped>
:global(body) {
  background:
    url("/img/home/home-bg.png") 0 0 / cover no-repeat,
    #0a0f17;

  @media (max-width: 1440px) {
    background:
      url("/img/home/home-bg-laptop.png") 0 0 / cover no-repeat,
      #0a0f17;
  }

  @media (max-width: 1024px) {
    background:
      url("/img/home/home-bg-tablet.png") 0 0 / cover no-repeat,
      #0a0f17;
  }

  @media (max-width: 600px) {
    background:
      url("/img/home/home-bg-phone-big.png") 0 0 / cover no-repeat,
      #0a0f17;
  }

  @media (max-width: 430px) {
    background:
      url("/img/home/home-bg-phone.png") 0 0 / cover no-repeat,
      #0a0f17;
  }
}
</style>
