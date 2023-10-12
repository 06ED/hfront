<template>
  <div>
    <Offer/>
    <Rent/>
  </div>
</template>

<script>
import Menu from "@/App.vue";
import Offer from "@/components/rent/Offer.vue";
import Rent from "@/components/rent/Rent.vue";

export default {
  components: {Rent, Offer, Menu}

}
</script>

<style scoped>

</style>