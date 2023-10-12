<template>
  <div class="rent">
    <List :items="items"/>
  </div>
</template>

<script>
import axios from "axios";
import List from "@/components/rent/rent/List.vue";

export default {
  data: () => ({
    items: null
  }),
  components: {List},
  methods: {
    async getList() {
      await axios.get(this.$store.state.apiUrl + 'services/rent/')
          .then(res => {
            console.log(res.data)
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
  .rent {
    margin: 100px 0 100px 0;
  }
</style>