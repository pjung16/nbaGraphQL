export default {
  players: [],
  graphOptions: {
    graphDataType: 'pts',
    chart: {
      backgroundColor: '#282C34',
      type: 'line',
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