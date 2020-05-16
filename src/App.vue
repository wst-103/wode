<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
 data(){
   return{
     barShow:true
   }
 },
//  路由跳转事件监听
 watch:{
		$route(after,before){
			
			let afterLeavel = after.path.split("/").length
			let beforeLeavel = before.path.split("/").length
			console.log(after)
			
			if (afterLeavel>2){
				this.barShow = false
			}else{
				this.barShow = true
			}
		}
	}
}

</script>
<style>

</style>
