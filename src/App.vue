<template>
  <div id="app">
    <ejs-chart :primaryXAxis="chartPrimaryXAxis" :primaryYAxis="chartPrimaryYAxis" 
    :title="chartTitle" :legendSettings="chartLegend" selectionMode="Point" 
    :enableAnimation="setAnimation">
      <e-series-collection>
        <e-series type="Column" :dataSource="chartData" xName='country' yName='gold'
        name="Gold" legendShape="Circle" ></e-series>
        <e-series type="Column" :dataSource="chartData" xName="country" yName="silver"
        name="" legendShape="Triangle" ></e-series>
        <e-series type="Column" :dataSource="chartData" xName="country" yName="bronze"
        name="Bronze" legendShape="Diamond" ></e-series>
      </e-series-collection>   
    </ejs-chart>
  </div>
</template>

<script>
import Vue from "vue";
import { ChartPlugin, ColumnSeries, Category, Legend, Selection } from '@syncfusion/ej2-vue-charts';
Vue.use(ChartPlugin);
export default {
  provide : {chart : [ColumnSeries, Category, Legend, Selection ]},
  data() {
    return {
      setAnimation : 'true',
      chartLegend : {
        visible : 'true',
        position : 'Top',
        alignment : 'Far',
        shapeHeight : 15,
        shapeWidth : 15,
        toggleVisibility : false,
        height : '100',
        width : '125',
        padding : 25,
        shapePadding : 10,
        enablePages : false,
        textWrap : 'Wrap'
      },
      chartTitle : 'Olympic Medal Counts - RIO',
      chartPrimaryXAxis : {
        valueType: "Category",
        title: 'Countries'
      },
      chartPrimaryYAxis : {
         title : 'Medals Count'
      },
      chartData : [
        { country :"USA", gold : 70, silver : 60, bronze :45 },
        { country :"China", gold : 60, silver : 40, bronze :55 },
        { country :"Japan", gold : 70, silver : 65, bronze :50 },
        { country :"Australia", gold : 60, silver : 55, bronze :40 },
        { country :"France", gold : 50, silver : 45, bronze :35 },
        { country :"Germany", gold : 40, silver : 30, bronze :22 },
        { country :"Italy", gold : 35, silver : 40, bronze :37 },
        { country :"Sweden", gold : 30, silver : 25, bronze :27 }
      ]
    };
  }
}
</script>





