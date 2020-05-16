<template>
  <!-- <div class="a"> -->
    <div class="tariffCards">
      <div class="economy" v-for="(i,index) in 4" :key="index"></div>
      <div class="economy two" v-for="(i,index) in 4" :key="index"></div>
      <div class="economy thire" v-for="(i,index) in 4" :key="index"></div>
      <div class="economy four" v-for="(i,index) in 4" :key="index"></div>
    </div>
  <!-- </div> -->
</template>

<script>
export default {};
</script>

<style scoped>
.a{
  border: 1px solid red;
  position: relative;
}
.tariffCards {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -180px 0 0 -140px;
  user-select: none;
  transform: translate3d(0, 0, 0);
  transform-style: preserve-3d;
  margin-top: 120px;
  /* border: 1px solid black; */
}

.tariffCards:after {
  position: absolute;
  bottom: -27px;
  left: 5%;
  content: "";
  width: 65%;
  height: 10px;
  border-radius: 100%;
}
.tariffCards > div {
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  color: white;
  transform: rotateX(45deg) rotateY(-10deg) rotate(45deg);
  transition: all 0.4s ease;
  overflow: hidden;
  cursor: pointer;
}
.tariffCards > div.economy {
  margin-top: 0;
  z-index: 3;
  background-image: linear-gradient(180deg, #E64CEC 3%, #3C3AFF 100%);
  margin-top: -120px;
}
.two{
  background-image: linear-gradient(180deg, #612CCC 3%, #790A3D 100%) !important;
}
.thire{
  background-image: linear-gradient(126deg, #4D48C4 0%, #495ED1 24%, #3DA2FB 100%) !important;
}
.four{
  background-image: linear-gradient(90deg, #332E4C 3%, #575473 98%) !important;
}
</style>