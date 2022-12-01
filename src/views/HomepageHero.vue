<script lang="ts" setup>
import deviceClosed from '@/assets/images/Samsung_Galaxy_Z_Flip3_5G_SM-F711B_Phantom_Black_Front_Closed_RGB_500.png'
import deviceClosedHigh from '@/assets/images/Samsung_Galaxy_Z_Flip3_5G_SM-F711B_Phantom_Black_Front_Closed_RGB_1000.png'
import deviceOpened from '@/assets/images/Samsung_Galaxy_Z_Flip3_5G_SM-F711B_Phantom_Black_315_Table_Top_Logoscreen_RGB_500.png'
import deviceOpenedHigh from '@/assets/images/Samsung_Galaxy_Z_Flip3_5G_SM-F711B_Phantom_Black_315_Table_Top_Logoscreen_RGB_1000.png'
import ccLogo from '@/assets/images/CCLogo.png'
import providerLogo from '@/assets/images/network-40.svg'
</script>

<template>
  <a href="#">
    <article class="offer-banner-article">
      <header>
        <figure class="image-container image-container__device-closed">
          <picture>
            <source :srcset="deviceClosed" type="image/png" media="(max-width: 500px)">
            <source :srcset="deviceClosedHigh" type="image/png" media="(min-width: 501px)">
            <img :src="deviceClosed" alt="Crazy X-Mas ZFlip35G">
          </picture>
        </figure>
        <figure class="image-container image-container__device-opened">
          <picture>
            <source :srcset="deviceOpened" type="image/png" media="(max-width: 500px)">
            <source :srcset="deviceOpenedHigh" type="image/png" media="(min-width: 501px)">
            <img :src="deviceOpened" alt="Crazy X-Mas ZFlip35G">
          </picture>
        </figure>
        <figure class="image-container image-container__xmas">
          <img :src="ccLogo" alt="">
        </figure>
        <figure class="image-container image-container__provider-logo">
          <img :src="providerLogo" alt="">
        </figure>
      </header>
      <section>

      </section>
    </article>
  </a>
</template>

<style lang="scss" scoped>
a {
  display: block;
  cursor: pointer;
}

.offer-banner-article {
  --animation-device-offset: 60px;
  --animation-device-offset-negative: -60px;

  position: relative;
  width: 100%;
  height: auto;
  aspect-ratio: 21 / 8;
  padding: 45px 50px;
  background-color: #163351;
  overflow: hidden;
}

.image-container {
  --offset-left: 100px;

  margin: 0;

  &__device-closed,
  &__device-opened,
  &__xmas {
    position: absolute;

    animation-duration: 1.5s, 30s;
    animation-iteration-count: 1, infinite;
    animation-timing-function: ease-out, ease-in-out;
    animation-delay: 0s, 6s;
  }

  &__device-closed {
    z-index: 10;
    left: var(--offset-left);
    top: 50px;
    width: 300px;
    height: auto;
    opacity: 1;

    animation-name: device-closed-fly-in, device-closed-change-front;
  }

  &__device-opened {
    z-index: 20;
    left: calc(var(--offset-left) + 180px);
    top: 50px;
    width: 500px;
    height: auto;

    animation-name: device-opened-fly-in, device-opened-change-front;
  }

  &__xmas {
    z-index: 50;
    left: calc(var(--offset-left));
    bottom: 20px;
    width: 204px;
    height: auto;

    animation-name: xmas-fly-in;
  }

  &__provider-logo {
    position: absolute;
    z-index: 10;
    top: 20px;
    right: 20px;
    width: 60px;
    height: 60px;

    border: 2px solid var(--color-white);
    border-radius: 50%;
    overflow: hidden;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }
}

@keyframes device-closed-fly-in {
  0% {
    transform: translateX(-300px);
    opacity: 0;
  }

  30% {
    opacity: 1;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes device-opened-fly-in {
  0% {
    transform: translateX(300px);
    opacity: 0;
  }

  30% {
    opacity: 1;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes device-closed-change-front {
  0% {
    transform: translateX(0) scale(1);
  }

  1% {
    transform: translateX(var(--animation-device-offset-negative)) scale(1.05);
  }

  1.01% {
    transform: translateX(var(--animation-device-offset-negative)) scale(1.05);
    z-index: 30;
  }

  2% {
    transform: translateX(0) scale(1.1);
  }

  25% {
    transform: translateX(0) scale(1.1);
  }

  26% {
    transform: translateX(var(--animation-device-offset-negative)) scale(1.05);
    z-index: 30;
  }

  26.01% {
    transform: translateX(var(--animation-device-offset-negative)) scale(1.05);
    z-index: 10;
  }

  27% {
    transform: translateX(0) scale(1);
  }
}

@keyframes device-opened-change-front {
  0% {
    transform: translateX(0) scale(1);
  }

  1% {
    transform: translateX(var(--animation-device-offset)) scale(.95);
  }

  1.01% {
    transform: translateX(var(--animation-device-offset)) scale(.95);
  }

  2% {
    transform: translateX(0) scale(.9);
  }

  25% {
    transform: translateX(0) scale(.9);
  }

  26% {
    transform: translateX(var(--animation-device-offset)) scale(.95);
  }

  26.01% {
    transform: translateX(var(--animation-device-offset)) scale(.95);
  }

  27% {
    transform: translateX(0) scale(1);
  }
}

@keyframes xmas-fly-in {
  0% {
    opacity: 0;
  }

  40% {
    transform: scale(2);
    filter: blur(10px);
    opacity: 0;
  }

  60% {
    filter: blur(0);
  }

  80% {
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
