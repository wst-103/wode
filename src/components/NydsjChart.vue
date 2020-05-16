<template>
  <div id="ei" ref="chart"></div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "chart",
  props: ["option"],
  data() {
    return {
      myChart: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.myChart = echarts.init(this.$refs.chart);
      this.drawChart()
    });
  },
  watch: {
    option() {
      this.myChart.clear();
      this.myChart.setOption(this.option);
    }
  },
  methods: {
    drawChart() {
      let _this=this;
      _this.myChart.setOption(_this.option);
      _this.myChart.on("click", function(params) {
      _this.$emit("clickBar",params.dataIndex);
      });
    }
  }
};
</script>

<style scoped>
#ei {
  width: 100%;
  height: 100%;
}
</style>