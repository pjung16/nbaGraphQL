export default {
  players: [],
  graphDataType: 'pts',
  graphOptions: {
    chart: {
      backgroundColor: '#282C34',
      type: 'line',
      height: '75%'
    },

    title: {
      text: 'Player Stats Comparison',
      style: {
        color: '#ffffff'
      }
    },

    xAxis: {
      labels: {
        enabled: false
      }
    },

    yAxis: {
      title: {
        text: 'Points'
      }
    },

    tooltip: {
      shared: true
    },

    legend: {
      itemStyle: {
        color: '#ffffff',
      }
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 0
      }
    },

    colors: ['#67DBF9', '#00E680', '#A722E5', '#FF4848', '#FF8413'],

    series: [],

    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  }
}