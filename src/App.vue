<template>
  <Side/>
  <Menu/>
  <wrapper>
    <router-view></router-view>
  </wrapper>
  <Footer/>
</template>

<script>
import Menu from "@/components/base/Menu.vue";
import Wrapper from "@/components/app/wrapper.vue";
import Footer from "@/components/base/Footer.vue";
import Side from "@/components/base/Side.vue";

export default {
  components: {Side, Footer, Wrapper, Menu}

}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Inter, sans-serif;
    scroll-behavior: smooth;
  }
</style>