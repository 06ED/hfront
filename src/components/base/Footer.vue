<template>
  <footer>
    <router-link class="link" to="/">Главная</router-link>
    <router-link class="link" to="/#a">О нас</router-link>
    <router-link class="link" to="/events">Мероприятия</router-link>
    <router-link class="link" to="/dairy">Молочная продукция</router-link>
    <router-link class="link" to="/financial">Инвесторам</router-link>
    <router-link class="link" to="/rent">Аренда</router-link>
    <router-link class="link" to="/marry">Свадьбы</router-link>
    <router-link class="link" to="/booking">Бронирование</router-link>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
  footer {
    height: 10vh;
    width: 100%;
    background-color: #FBCA9C;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  footer .link {
    color: white;
    font-size: 1.2em;
    text-decoration: none;
  }
</style>