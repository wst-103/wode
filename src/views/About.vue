<template>
  <div>
    <div>{{sortList()}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
     constituteList:[
       {name:"sd",a:'20.32'},
       {name:"a",a:'10.11'}
     ]
    }
  },
  methods: {
    sortBykey(ary, key) {
      return ary.sort(function(a, b) {
        let x = a[key];
        let y = b[key];
        return x < y ? -1 : x > y ? 1 : 0;
      });
    },
    sortList() {
      return this.sortBykey(this.constituteList, 'a')
    }
  }
};
</script>

<style>
</style>