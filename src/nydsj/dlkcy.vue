<template>
  <div class="dlkjj">
    电力看产业
    <p v-for="(i,index) in list" :key="index">{{i}}</p>
    <div class="container">
      <div class="side left"></div>
      <div class="side front"></div>
      <div class="side right"></div>
      <div class="side back"></div>

      <div class="shadow"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["王法", "贺莹", "张雪莉", "郭萍萍"],
      list: [],
      timer: null,
      a: 0
    };
  },
  methods: {
    change() {
      this.list.push(this.arr[0]);
      var len = this.arr.length;
      console.log(len);
      console.log(this.list);
      this.timer = setInterval(() => {
        this.list = [];
        this.list.push(this.arr[this.a]);
        if (this.a < 3) {
          this.a = this.a + 1;
          //  console.log(this.a);
        } else {
          this.a = 0;
          console.log(this.a);
        }
      }, 3000);
    }
  },
  created() {
    this.change();
  }
};
</script>

<style scoped>
.container{
  width: 400px;
  height: 400px;
  margin: 0 auto;
  position: relative;
  perspective: 300px;
  perspective-origin: 50% 40%;
}
.side{
  position: absolute;
  left: 140px;
  top: 150px;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 40px solid #ccc;
  transform-origin: 50% 0%;
  animation: spin 10s infinite linear;
}
.back{
  animation-delay: -5s;
}
.right{
  animation-delay: -2.5s;
}
.left{
  animation-delay: -7.5s;
}
@keyframes spin{
  0%{
    transform: rotateY(0deg) rotateX(30deg);
    border-bottom-color: #1abcff;
  }
  25%{
    transform: rotateY(90deg) rotateX(30deg);
    border-bottom-color: #1abcff;
  }
   25.1% {
        /* opacity: 0; */
    }
    50% {
        transform: rotateY(180deg) rotateX(30deg);
        border-bottom-color: #0089c2;
    }
    74.9% {
        opacity: 0;
    }
    75% {
        transform: rotateY(270deg) rotateX(30deg);
        border-bottom-color: #007eb3;
        opacity: 1;
    }
    100% {
        transform: rotateY(360deg) rotateX(30deg);
        border-bottom-color: #1abcff;
    }
}
.shadow {
    position: absolute;
    top: 300px;
    left: 175px;
    width: 50px;
    height: 50px;
    background-color: #bbb;
    box-shadow: 0 0 40px 40px #bbb;
    animation: shadow 5s infinite linear;
}
@keyframes shadow {
    0% {
        transform: rotateX(90deg) rotateZ(0deg);
    }
    100% {
        transform: rotateX(90deg) rotateZ(-360deg);
    }
}
</style>