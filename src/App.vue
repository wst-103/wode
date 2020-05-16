<template>
  <div id="app">
    <router-view />
    <!-- <p>当前页{{name}}</p> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: ""
    };
  },
  watch: {
    $route(after, before) {
      let afterLeavel = after.path.split("/").length;
      let beforeLeavel = before.path.split("/").length;
      // console.log(after.name);
      this.name = after.name;
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>
