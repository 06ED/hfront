<template>
  <div>
    <Offer/>
    <About id="a"/>
    <div class="slider">
      <h1>По реке времени</h1>
      <ImgComparisonSlider>
        <!-- eslint-disable -->
        <img
            slot="first"
            style="width: 100%"
            src="@/assets/compare/river.png"
        />
        <img
            slot="second"
            style="width: 100%"
            src="@/assets/compare/river2.jpg"
        />
        <!-- eslint-enable -->
      </ImgComparisonSlider>
    </div>



  </div>

</template>

<script>
import Offer from "@/components/home/Offer.vue";
import About from "@/components/home/About.vue";

import { ImgComparisonSlider } from '@img-comparison-slider/vue';


export default {
  components: {About, Offer, ImgComparisonSlider}
}
</script>

<style scoped>
  .slider {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 100px;
    margin-bottom: 100px;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .slider h1 {
    font-size: 2em;
    letter-spacing: 2px;
  }
</style>