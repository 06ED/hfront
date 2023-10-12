<template>
  <div class="self__booking" v-if="res !== null">
    <img :src="res.image" alt="">
    <span class="name">Забронировать <strong>{{ res.name }}</strong></span>
    <span class="description">{{ res.description }}</span>
    <form method="POST" @submit.prevent>
      <input type="text" name="" id="" placeholder="Имя">
      <input type="text" name="" id="" placeholder="Фамилия">
      <input type="email" name="" id="" placeholder="e-mail">
      <input type="date" name="" id="" placeholder="Дата до">
      <input type="date" name="" id="" placeholder="Дата после">
      <input type="submit" value="Забронировать">
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {},
  data: () => ({
    res: null
  }),
  methods: {
    async getService() {
      await axios.post(this.$store.state.apiUrl + 'service/', {id: 1})
          .then(res => {
            this.res = res.data
          })
          .catch(error => {
            console.log(error)
          })
    }
  },
  mounted() {
    this.getService()
  }
}
</script>

<style scoped>
  .self__booking {
    margin: 150px auto;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 50px
  }
  .self__booking img {
    object-fit: cover;
    width: 100%;
    height: 600px;
    border-radius: 10px;
  }
  .self__booking form {
    height: 40%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    gap: 40px;
  }
  .self__booking form input {
    width: 100%;
    padding: 10px 25px;
  }
  .self__booking .name {
     font-size: 1.2em;
  }
  .self__booking .description {
    padding: 20px ;
  }
</style>