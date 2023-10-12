<template>
  <router-link v-if="item !== undefined" class="link" :to="{name: 'selfbooking', params: {id: 1} }">
    <article>
      <div class="img">
        <img :src="item.image">
      </div>
      <div class="info">
        <h4 class="name">{{ item.name }}</h4>
        <span class="description">{{ item.description }}</span>
      </div>
    </article>
  </router-link>
</template>

<script>

export default {
  props: {
    item: Object
  },
}
</script>

<style scoped>
  .link {
    width: 100%;
    height: 270px;
    color: #ff6d41;
    text-decoration: none;
  }
  article {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    box-shadow: 1px 1px 5px 0 lightgray;
  }
  article img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  article .img {
    width: 30%;
    height: 100%;
  }
  article .info {
    height: 100%;
    width: 70%;
    padding: 35px;
  }
</style>