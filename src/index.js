//Here we're importing items we'll need. You can add other imports here.
import ApexCharts from "apexcharts";
//The first function. Remove this.

var options = {
  chart: {
    type: "line",
  },
  series: [
    {
      name: "sales",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ],
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
};
var optionsTwo = {
  chart: {
    events: {
      dataPointSelection: function (d) {
        alert("Hi");
      },
    },
    type: "bar",
  },
  series: [
    {
      name: "sales",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ],
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
var chartTwo = new ApexCharts(document.querySelector("#chartTwo"), optionsTwo);

chart.render();
chartTwo.render();
