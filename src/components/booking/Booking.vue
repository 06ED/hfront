<template>
  <div class="booking">
    <List :items="items"/>
  </div>
</template>

<script>
import axios from "axios";
import List from "@/components/booking/booking/List.vue";

export default {
  data: () => ({
    items: null
  }),
  components: {List},
  methods: {
    async getList() {
      await axios.get(this.$store.state.apiUrl + 'service/')
          .then(res => {
            console.log(res)
            this.items = res.data
          })
          .catch(e => {
            console.log(e)
          })
    }
  },
  mounted() {
    this.getList()
  }
}
</script>

<style scoped>
  .booking {
    margin: 100px 0 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>