<template>
  <div class="main">
    <div class="head">
      <ul>
        <li
          v-for="(i,index) in head"
          :key="index"
          @click="btn(index)"
          :class="{'tive':active==index}"
        >{{i.name}}</li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      head: [
        {name: "智慧能源大数据",router:"/dat"},
        {name:"企业复产复工",router:"/dat/qyfcfgfx"},
        {name:"电力看民生",router:"/dat/dlkms"},
        {name:"电力看产业",router:"/dat/dlkcy"},
        {name:"电力看经济",router:"/dat/dlkjj"}
      ],
      active: 0
    };
  },
  methods: {
    btn(index) {
      this.active = index;
      this.$router.push(this.head[index].router)
    }
  }
};
</script>

<style scoped>
.tive {
  background: rgb(103, 210, 252);
  color: white;
}
.main {
  width: 100%;
  height: 60px;
}
ul {
  display: flex;
  width: 60%;
  margin: 0 auto;
  line-height: 60px;
  /* border: 1px solid black; */
}
li {
  list-style: none;
  width: 20%;
  text-align: center;
}
li:hover {
  background: rgb(103, 210, 252);
  color: white;
  cursor: pointer;
}
</style>