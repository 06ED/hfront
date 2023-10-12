<template>
  <div class="booking__list">
    <Article v-for="item of items" :item="item"/>
  </div>
</template>

<script>
import Article from "@/components/booking/booking/Article.vue";

export default {
  components: {Article},
  props: {
    items: Array
  }
}
</script>

<style scoped>
  .booking__list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    gap: 50px;
  }
</style>