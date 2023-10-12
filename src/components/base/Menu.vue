<template>
  <header :class="{change_color: scrollPosition > 500}">
    <router-link to="/">
      <div class="logo">
        <img src="@/assets/logo.png">
      </div>
    </router-link>
    <nav>
      <router-link to="/#a">О нас</router-link>
      <a @click="onClick">Услуги</a>
      <a>Мероприятия</a>
      <router-link to="/dairy">Молочная продукция</router-link>
      <router-link to="/financial">Инвесторам</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  data: () => ({
    scrollPosition: null
  }),
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    onClick() {
      this.$store.commit('changeModal')
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  }
}
</script>

<style scoped>
header {
  width: 100%;
  height: 80px;
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  border-bottom: 2px solid #FBCA9C;
  transition: .4s;
  top: 0;
}
.logo {
  color: #ff6d41;
  font-size: 1.5em;
  font-weight: bold;
  letter-spacing: 1px;
}
.logo img {
  height: 128px;
  width: 128px;
}
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
}
nav a {
  color: #FBCA9C;
  text-decoration: none;
  font-size: 1.1em;
  cursor: pointer;
}
nav a:hover {
  color: lightgray;
}
.change_color {
  transition: .4s;
  background-color: #FBCA9C;
}
.change_color a {
  transition: .4s;
  color: white;
}
</style>