<template>
  <Offer/>
  <div class="excursion">
    <h2>Экскурсия по Деревне</h2>
    <span>Пройдитесь по извилистым улочкам деревни в компании наших опытных гидов. Они расскажут вам увлекательные истории о восстановлении Мувыра и расскроют секреты местных традиций.</span>
    <h2>Включено в экскурсию:</h2>
      <ul>
        <li>Пешеходная экскурсия по основным достопримечательностям деревни.</li>
        <li>Увлекательные рассказы о восстановительном процессе исторического поселения.</li>
        <li>Возможность встретить местных жителей и узнать о их повседневной жизни.</li>
      </ul>
    <h2>Стоимость</h2>
    <span>Экскурсия с питанием: 700 рублей на человека.</span>
    <h2>Расписание</h2>
    <span>Обязательно предварительно записывайтесь, чтобы мы могли предоставить вам лучшее обслуживание.</span>
    <h2>Забронировать Экскурсию</h2>
    <img src="@/assets/exc.jpg" alt="">
    <span>Чтобы забронировать экскурсию или уточнить дополнительные детали, пожалуйста, свяжитесь с нами</span>
    <span>Мы с нетерпением ждем вас в Возрожденной деревне Мувыр, где каждый уголок наполнен историей и удивительными открытиями. Приходите и прочувствуйте волшебство этого уникального места вместе с нами!</span>

  </div>
</template>

<script>
import Offer from "@/components/excursion/Offer.vue";

export default {
  components: {Offer}

}
</script>

<style scoped>
.excursion {
  margin: 0 auto;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 50px;
  gap: 25px;
}
.excursion h1 {
  font-size: 3em;
  font-family: Arial, sans-serif;
  letter-spacing: 2px;
  color: #f33232;
}
.excursion h2 {
  font-size: 1.7em;
  color: #FBCA9C;
  padding: 20px;
}
.excursion span {
  padding: 20px;
  font-size: 1.2em;
  text-align: justify-all;
}
.excursion ul {
  margin-left: 75px;
  font-size: 1.2em;
}
.excursion img {
  border-radius: 10px;
}

</style>