<template>
  <article v-if="item !== undefined">
    <div class="img">
      <img :src="item.img_url" alt="">
    </div>
    <div class="info">
      <h4 class="name">{{ item.name }}</h4>
      <span class="cost">{{ item.cost }}</span>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>

<style scoped>
 article {
   height: 500px;
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
   flex-direction: column;
   border-radius: 10px;
   box-shadow: 1px 1px 5px 0 lightgray;
 }
 article img {
   height: 100%;
   width: 100%;
   object-fit: cover;
   border-radius: 10px;
   //border: 1px solid red;
 }
 article .img {
   width: 100%;
   height: 50%;
   //border: 1px solid red;
 }
 article .info {
   height: 50%;
   width: 100%;
   padding: 25px;
   //border: 1px solid red;
 }
</style>