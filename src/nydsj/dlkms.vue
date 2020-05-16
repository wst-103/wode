<template>
  <div>
    <div class="a">
      <ta />
    </div>
  </div>
</template>

<script>
import ta from "@/components/ta.vue"
export default {
 components:{
   ta
 }
}
</script>

<style>
.a{
  width: 300px;
  height: 600px;
  border: 1px solid black;
  position: relative;
}
</style>