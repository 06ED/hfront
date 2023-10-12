<template>
  <div @click="onClick" class="side__wrapper" :class="{__active__wrapper: $store.state.modalActive === true}">
    <div class="side" :class="{__active__side: $store.state.modalActive === true}">
      <h3>Наши услуги</h3>
      <nav>
        <ul>
          <li><router-link @click="onClick" to="/rent" class="link">Аренда</router-link></li>
          <li><router-link to="/booking" class="link">Бронирование</router-link></li>
          <li><router-link to="/excursion" class="link">Экскурсии</router-link></li>
          <li><router-link to="/marry" class="link">Свадьбы</router-link> </li>
        </ul>

      </nav>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClick(event) {
      if (event.target.className.includes('side__wrapper') || event.target.className.includes('link')) {
        this.$store.commit('closeModal')
      }
    }
  }
}
</script>

<style scoped>
  .side__wrapper {
    //background-color: rgba(0, 0, 0, 0.8);
    background-color: rgba(0, 0, 0, 0.0);
    z-index: 10000012040124001041204000;
    height: 100vh;
    width: 100%;
    position: fixed;
    transition: .4s;
    //display: none;
    transform: translateX(100%);
  }
  .side {
    background-color: white;
    height: 100%;
    width: 18%;
    float: right;
    transform: translateX(100%);
    transition: .2s;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding: 50px;
    gap: 25px;
    letter-spacing: 2px;
    box-shadow: -5px 0 5px 0 lightgray;
  }
  .side h3 {
    font-size: 1.4em;
    color: #FBCA9C;
  }
  .side nav {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 15px;
  }
  .side nav ul, .side nav li {
    padding: 5px 0;
    margin: 0   15px;
  }
  .side nav .link {
    color: #ff6d41;
    text-decoration: none;
  }
  .side nav .link:hover {
    color: #FBCA9C;
    cursor: pointer;
  }
  .__active__wrapper {
    transition: .2s;
    background-color: rgba(0, 0, 0, 0.8);
    transform: translateX(0);
    //background: red;
    //display: block;
  }
  .__active__side {
    transform: translateX(0);
    transition: .4s;
  }
</style>