<template>
  <div class="rent__list">
    <div class="list__item" v-for="(item, index) of items">
      <Article @click="get" :data-id="item.id" v-for="obj of item" :item="obj"/>
    </div>
  </div>
</template>

<script>
import Article from "@/components/rent/rent/Article.vue";

export default {
  components: {Article},
  props: {
    items: Array
  },
  methods: {
    get(event) {
      console.log('asfasf')
    }
  },
  mounted() {
    this.get('af')
  }
}
</script>

<style scoped>
  .rent__list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;}
  .list__item {
    //background: red;
    //height: 700px;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center ;
    flex-direction: column;
    gap: 50px;
  //border: 1px solid red;
  }
  .link {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
</style>