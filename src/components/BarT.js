import ReactApexChart from 'react-apexcharts'
import { useSelector } from 'react-redux'

import './chart.css'

export default function ApexChart() {
  const UpdatedData = useSelector(state => state.staticDetailsReducer);
  const state = {
    series: [{
      name: " ",
      data: [UpdatedData.leaderStatic.sumContacts,
      UpdatedData.leaderStatic.sumPapers,
      UpdatedData.leaderStatic.sumProjects,
      UpdatedData.leaderStatic.sumTasks]
    }],
    options: {
      scales: {
        yAxes: [{

          ticks: {
            beginAtZero: true,
            userCallback: function (value, index, values) {
              value = value.toString();
              value = value.split(/(?=(?:...)*$)/);
              value = value.join(',');
              return value;
              // return value.toLocaleString();   // this is all we need
            }
          }
        }]
      },
      xaxis: {
        type: 'category',
        categories: [],
        labels: {
          show: false
        }
      },

      grid: {

        show: true,
        borderColor: '#90A4AE',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
          lines: {
            show: false
          },
          labels: {
            show: false
          },
        },

        yaxis: {
          // decimalsInFloat: undefined,
          lines: {

            show: false
          },
          gridlines: { count: -1 },

        },
        row: {
          colors: undefined,
          opacity: 0.5
        },
        column: {
          colors: undefined,
          opacity: 0.5
        },

      },
      chart: {
        height: 350,
        type: 'bar',
        background: '#f8f9fa',

        toolbar: {
          show: false
        },

      },
      // minValue: 4,
      // viewWindow: { min: 0 }, /*this also makes 0 = min value*/
      // format: '0',

      colors: ['rgb(247, 181, 0)', 'rgb(1, 220, 209)', 'rgb(103, 114, 222)', 'rgba(255, 69, 96, 0.85)'],
      plotOptions: {
        bar: {
          borderRadius: 6,
          columnWidth: '50%',
          distributed: true,
        }
      },
      labels: ['contacts', 'papers', 'projects ', 'tasks'],
      dataLabels: {
        show: false,
        enabled: false
      },
      // ----מקרא מפה למטה
      legend: {
        show: false,
        display: false
      },
      tooltip: {

        callbacks: {
          label: function (tooltipItem, data) {
            var tooltipValue = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
            return parseInt(tooltipValue).toLocaleString();
          }
        },


        enabled: true,
        enabledOnSeries: undefined,
        shared: false,
        followCursor: false,
        intersect: false,
        inverseOrder: false,
        custom: undefined,
        fillSeriesColor: true,
        theme: true,
        style: {
          fontSize: '12px',
          fontFamily: undefined,
          backgroundColor: 'white'
        },
        onDatasetHover: {
          highlightDataSeries: true,
        },
        x: {
          show: true,
          format: 'dd MMM',
          formatter: undefined,
        },
        y: {
          show: true,
          formatter: undefined,
          title: {
            formatter: (seriesName) => seriesName,
          },
        },
        marker: {
          show: true,
        },
        fixed: {
          enabled: false,
          position: 'topRight',
          offsetX: 0,
          offsetY: 0,
        },
      }
    },
  };
  return (
    <div id="chart" >
      <ReactApexChart options={state.options} series={state.series} type="bar" height="110%" width="86%" />
    </div >
  );
}