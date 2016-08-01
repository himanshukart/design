"use strict";
engageApp.controller('reportController',['$scope','$http','$location','userFactory','loginServices','cookieService', function($scope,$http,$location,userFactory,loginServices,cookieService) {
  console.log("Inside report controller");
    $scope.options = [{ name: "Graph A", id: 1 }, { name: "Graph B", id: 2 }, { name: "Graph C", id: 3 }];
    $scope.selectedOption = $scope.options[0];
    console.log($scope.selectedOption);
    var canvas1 = $("#pieChartCanvas1").get(0).getContext("2d");
    var canvas2 = $("#pieChartCanvas2").get(0).getContext("2d");
    var canvas3 = $("#pieChartCanvas3").get(0).getContext("2d");
    var canvas4 = $("#pieChartCanvas4").get(0).getContext("2d");

    var lineChart = document.getElementById("lineChart1");
    var MultlineChart = document.getElementById("MultipleLineChart1");
    var horizontalBarChart = document.getElementById("horizontalChart");
    var lineChart2 = document.getElementById("lineChart2");
    var lineChart3 = document.getElementById("lineChart3");
    var lineChart4 = document.getElementById("lineChart4");
    var lineChartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Engagement Graph",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [10, 20, 35, 37, 40, 42, 50],
                spanGaps: false,
            }
        ]
    };
    var lineChartData2 = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Lifetime Value Progression",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [10, 20, 35, 37, 40, 42, 50],
                spanGaps: false,
            }
        ]
    };
    var lineChartData3 = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Lifetime Value Progression",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [15, 25, 35, 23, 45, 42, 50],
                spanGaps: false,
            }
        ]
    };
    var lineChartData4 = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Something you like !!!",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [18, 21, 34, 37, 40, 10, 30],
                spanGaps: false,
            }
        ]
    };
    var multiLineChartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Positive",
                fill: false,
                lineTension: 0.1,
                //backgroundColor: "rgba(75,192,192,0.4)",
                backgroundColor: "#0066CC",
                // borderColor: "rgba(75,192,192,1)",
                borderColor: "#0066CC",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [31, 41, 51, 61, 71, 81, 91],
                spanGaps: false,
            },
            {
                label: "Neutral",
                fill: false,
                lineTension: 0.1,
                //backgroundColor: "rgba(75,192,192,0.4)",
                backgroundColor: "#AAAAAA",
                //borderColor: "rgba(75,192,192,1)",
                borderColor: "#AAAAAA",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [15, 25, 35, 45, 55, 65, 75],
                spanGaps: false,
            },
            {
                label: "Negative",
                fill: false,
                lineTension: 0.1,
                //backgroundColor: "rgba(75,192,192,0.4)",
                backgroundColor: "#f00",
                //borderColor: "rgba(75,192,192,1)",
                borderColor: "#f00",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [10, 20, 30, 40, 50, 60, 70],
                spanGaps: false,
            }
        ]
    };

    var data = {
    labels: [
        "Red",
        "Blue",
        "Yellow"
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
};

var horizontalChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            data: [65, 59, 80, 81, 56, 55, 40],
        }
    ]
};

    //draw
    var myPieChart1 = new Chart(canvas1,{
      type: 'pie',
      data: data
    });
    var myPieChart2 = new Chart(canvas2,{
      type: 'pie',
      data: data
    });
    var myPieChart3 = new Chart(canvas3,{
      type: 'pie',
      data: data
    });
    var myPieChart4 = new Chart(canvas4,{
      type: 'pie',
      data: data
    });
    var myLineChart = new Chart(lineChart, {
      type: 'line',
      data: lineChartData
    });
    var myLineChart2 = new Chart(lineChart2, {
      type: 'line',
      data: lineChartData2
    });
    var myLineChart3 = new Chart(lineChart3, {
      type: 'line',
      data: lineChartData3
    });
    var myLineChart4 = new Chart(lineChart4, {
      type: 'line',
      data: lineChartData4
    });
    var multiLineChart = new Chart(MultlineChart, {
      type: 'line',
      data: multiLineChartData
    });
    // var myHorizontalBarChart = new Chart(horizontalBarChart, {
    //   type: 'horizontalBar',
    //   data: data
    // });

  }]);
