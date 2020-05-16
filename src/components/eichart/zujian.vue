<template>
  <div class="zujian">
      <p>women</p>
      <slot></slot>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{}
    },
    methods:{
        getData(){
            // 一个地方发送多个请求
            axios.all([axios('url'),axios('url')]).then(res=>{
                console.log(res)
            })
        },
        // 拿到两个结果 分开
        getData(){
            // 一个地方发送多个请求  两个参数不能省略小括号
            axios.all([axios('url'),axios('url')]).then(axios.spread((res1,res2)=>{
                console.log(res1)
                console.log(res2)
            }))
        },
    }
}
</script>

<style>

</style>