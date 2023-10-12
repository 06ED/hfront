<template>
  <div class="offer">
    <div class="black">
      <div class="info">
        <h1>Инвесторам</h1>
<!--        <h2>В настоящее время уже немало сделано! Активно развиваем агротуризм!</h2>-->
        <a class="btn" href="">Вперёд!</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.offer {
  height: 70vh;
  width: 100%;
  background-image: url('@/assets/captailOffer.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.black {
  height: 70%;
  width: 100%;
  background: rgba(0, 0, 0, .6);
  position: absolute;
}
.info {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 20px;
  padding: 250px;
  color: white;
}
.info h1 {
  font-size: 56px;
}
.info h2 {
  font-size: 34px;
}
.btn {
  padding: 15px 100px;
  background: #FBCA9C;
  border-radius: 10px;
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  transition: .4s;
}
.btn:hover {
  transition: .4s;
  background: lightgray;

}
</style>