<template>
    <ImgComparisonSlider style="height: 1000px; width: 100%; margin: 0 auto">
      <!-- eslint-disable -->
      <img
          slot="first"
          style="width: 100%; object-fit: cover"
          src="@/assets/compare/river.png"
      />
      <img
          slot="second"
          style="width: 100%"
          src="https://cdn-ru.bitrix24.ru/b2292977/landing/b08/b080fe9223b2e1f47ab423b67ee063b1/IMG_20210603_102438_1x.jpg"
      />
      <!-- eslint-enable -->
    </ImgComparisonSlider>
</template>

<script>
import {ImgComparisonSlider} from "@img-comparison-slider/vue";
import {Hooper, Slide} from 'hooper';

export default {
  components: {ImgComparisonSlider, Hooper, Slide}

}
</script>

<style scoped>

</style>