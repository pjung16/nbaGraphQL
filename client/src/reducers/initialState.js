export default {
  players: [],
  graphOptions: {
    graphDataType: 'pts',
    chart: {
      backgroundColor: '#282C34',
      type: 'line',
    },

    title: {
      text: null,
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
      backgroundColor: '#343A40',
      borderWidth: 0,
      style:{
        color:'#ffffff',
        fontSize:'15px',
        whiteSpace:'nowrap',
        fontFamily: 'Lato',
      },
      padding: 15,
      headerFormat: null,
      pointFormat: `
        <b>{point.playerName}</b><br/>
        <span style="color:{point.color}">●</span> {point.gameData}: <b>{point.y}</b><br/>
      `,
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