<template>
  <div class="dairy">

    <div class="item">
      <div class="text">
        <span>В 2019 году Фермерское хозяйство Корепанова А Г "д. Мувыр" выиграло грант Министерства сельского хозяйства УР на постройку завода по переработке молока. Открытие производства состоялось в 2021 году в июне. Сегодня мы готовы предоставить вам следующие товары:</span>
        <ul>
          <li>Молока цельное (мдж 3.4%)</li>
          <li>Молока 3.2 %</li>
          <li>Молоко 2.5 %</li>
          <li>Сметана 20%</li>
          <li>Творог 5%</li>
          <li>Йогурты в ассортименте</li>
          <li>Мягкий "мувырский сыр"</li>
        </ul>
      </div>
      
      
      <div class="img__wrapper">
        <img src="@/assets/cheese.jpg" alt="">
      </div>
      
    </div>
    
    <div class="item">
      
      <div class="img__wrapper">
        <img src="@/assets/dairyProds.jpg" alt="">
      </div>

      <div class="text">
        <span>Наш ассортимент товаров: </span>
        <ul>
          <li>Молоко</li>
          <li>Сметана</li>
          <li>Творог</li>
          <li>Йогуртъ</li>
          <li>Сыр</li>
        </ul>
      </div>

      
    </div>


  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .dairy {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    padding: 150px 50px;
    gap: 20px;
    margin-bottom: 150px;
  }

  .item {
    height: 100%;
    width: 35%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  .img__wrapper {
    height: 70%;
    width: 100%;
  }

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 10px;
  }
  .text {
    padding: 50px;
    text-align: justify-all;
    letter-spacing: 1px;
    font-size: 1.2em;
  }
  .text ul {
    margin: 10px 25px;
  }
</style>