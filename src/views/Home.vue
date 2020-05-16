<template>
  <div>
    <chart v-bind:option="option1" style="width:495px;height:295px"></chart>
  </div>
</template>

<script>
import chart from "@/components/eichart/NydsjChart";
export default {
  components: {
    chart
  },
  data() {
    return {
      option1: {
        tooltip: {
          trigger: "axis"
        },
        color: ["#00A1FC", "#FC6D53"],
        legend: {
          data: ["2019年", "2020年"],
          icon: "roundRect",
          itemWidth: 30, // 设置宽度
          itemHeight: 6 // 设置高度
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: "value",
          axisTick: {
            show: false
          },
          axisLine: {
            //y轴
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed"
            }
          }
        },
        series: [
          {
            name: "2019年",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210],
            symbolSize: 10
          },
          {
            name: "2020年",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310],
            symbolSize: 10
          }
        ]
      }
    };
  }
};
</script>

<style>
</style>