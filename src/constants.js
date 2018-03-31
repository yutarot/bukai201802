import Chart from 'chart.js';

const colorSet = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};

export default {
  pointValues: {
    // points for each types.
    // [カメラタイプ, 3Dタイプ, ファンタジータイプ, 辞書タイプ, ラジオタイプ, サウンドタイプ]
    'q1-1': [2, 2, 1, 0, 0, 0],
    'q1-2': [0, 0, 0, 2, 0, 0],
    'q1-3': [0, 0, 0, 0, 1, 2],

    'q2-1': [4, 0, 0, 2, 0, 0],
    'q2-2': [0, 2, 0, 0, 0, 0],
    'q2-3': [0, 0, 4, 0, 2, 1],

    'q3-1': [4, 2, 0, 0, 0, 0],
    'q3-2': [0, 0, 1, 0, 0, 0],
    'q3-3': [0, 0, 0, 2, 2, 2],

    'q4-1': [0, 0, 0, 0, 0, 4],
    'q4-2': [0, 0, 2, 1, 4, 0],
    'q4-3': [1, 1, 0, 0, 0, 0],

    'q5-1': [0, 0, 0, 0, 0, 4],
    'q5-2': [0, 0, 1, 2, 4, 0],
    'q5-3': [1, 1, 0, 0, 0, 0],

    'q6-1': [2, 0, 0, 0, 0, 0],
    'q6-2': [0, 2, 1, 0, 0, 0],
    'q6-3': [0, 0, 0, 4, 0, 0],
    'q6-4': [0, 0, 0, 0, 2, 2],

    'q7-1': [0, 0, 0, 0, 2, 4],
    'q7-2': [0, 0, 1, 1, 0, 0],
    'q7-3': [1, 1, 0, 0, 0, 0],

    'q8-1': [2, 2, 0, 0, 0, 0],
    'q8-2': [0, 0, 2, 0, 1, 1],
    'q8-3': [0, 0, 0, 2, 0, 0],

    'q9-1': [2, 4, 0, 0, 0, 0],
    'q9-2': [0, 0, 2, 1, 0, 0],
    'q9-3': [0, 0, 0, 0, 1, 1],

    'q10-1': [0, 0, 0, 0, 2, 4],
    'q10-2': [0, 2, 2, 0, 0, 0],
    'q10-3': [1, 0, 0, 1, 0, 0],

    'q11-1': [4, 4, 1, 0, 0, 0],
    'q11-2': [0, 0, 0, 2, 4, 4],

    'q12-1': [4, 0, 0, 0, 0, 0],
    'q12-2': [0, 4, 0, 0, 0, 0],
    'q12-3': [0, 0, 4, 1, 2, 0],
    'q12-4': [0, 0, 0, 0, 0, 4],

    'q13-1': [0, 4, 2, 0, 0, 0],
    'q13-2': [2, 0, 0, 1, 0, 0],
    'q13-3': [0, 0, 0, 0, 1, 1],

    'q14-1': [0, 0, 2, 4, 2, 0],
    'q14-2': [0, 2, 0, 0, 0, 0],
    'q14-3': [2, 0, 0, 0, 0, 0],
    'q14-4': [0, 0, 0, 0, 0, 0],

    'q15-1': [0, 0, 0, 4, 0, 0],
    'q15-2': [0, 0, 1, 0, 0, 0],
    'q15-3': [2, 2, 0, 0, 0, 0],
    'q15-4': [0, 0, 0, 0, 1, 2],

    'q16-1': [0, 2, 0, 0, 0, 0],
    'q16-2': [0, 0, 2, 1, 1, 1],
    'q16-3': [2, 0, 0, 0, 0, 0],

    'q17-1': [0, 0, 2, 0, 0, 0],
    'q17-2': [2, 1, 0, 0, 0, 0],
    'q17-3': [0, 0, 0, 4, 0, 0],
    'q17-4': [0, 0, 0, 0, 2, 0],
    'q17-5': [0, 0, 0, 0, 0, 2],

    'q18-1': [0, 0, 2, 0, 0, 0],
    'q18-2': [2, 2, 0, 0, 0, 0],
    'q18-3': [0, 0, 0, 2, 1, 2],

    'q19-1': [0, 0, 2, 0, 0, 0],
    'q19-2': [2, 2, 0, 0, 0, 0],
    'q19-3': [0, 0, 0, 0, 2, 2],
    'q19-4': [0, 0, 0, 2, 0, 0],

    'q20-1': [2, 1, 0, 0, 0, 0],
    'q20-2': [0, 0, 1, 0, 0, 0],
    'q20-3': [0, 0, 0, 0, 0, 0],

    'q21-1': [2, 2, 0, 0, 0, 0],
    'q21-2': [0, 0, 2, 2, 0, 0],
    'q21-3': [0, 0, 0, 0, 0, 0],

    'q22-1': [0, 2, 2, 0, 0, 0],
    'q22-2': [2, 0, 0, 1, 0, 0],
    'q22-3': [0, 0, 0, 0, 0, 0],

    'q23-1': [0, 0, 0, 4, 2, 0],
    'q23-2': [0, 0, 4, 0, 0, 0],
    'q23-3': [0, 0, 0, 0, 0, 0],

    'q24-1': [0, 0, 0, 0, 0, 2],
    'q24-2': [0, 4, 2, 0, 0, 0],
    'q24-3': [0, 0, 0, 1, 2, 0],
    'q24-4': [1, 0, 0, 0, 0, 0],

    'q25-1': [0, 2, 1, 0, 0, 0],
    'q25-2': [0, 0, 0, 1, 0, 0],
    'q25-3': [0, 0, 0, 0, 0, 0],
    'q25-4': [2, 0, 0, 0, 0, 0],

    'q26-1': [0, 0, 0, 4, 0, 0],
    'q26-2': [0, 0, 0, 0, 2, 1],
    'q26-3': [0, 0, 4, 0, 0, 0],
    'q26-4': [2, 2, 0, 0, 0, 0],

    'q27-1': [0, 0, 2, 0, 1, 0],
    'q27-2': [0, 0, 0, 1, 0, 1],
    'q27-3': [1, 1, 0, 0, 0, 0],

    'q28-1': [0, 0, 0, 0, 4, 2],
    'q28-2': [0, 0, 2, 1, 0, 0],
    'q28-3': [1, 1, 0, 0, 0, 0],

    'q29-1': [0, 0, 2, 0, 1, 1],
    'q29-2': [0, 0, 0, 2, 0, 0],
    'q29-3': [1, 1, 0, 0, 0, 0],

    'q30-1': [0, 0, 0, 0, 0, 2],
    'q30-2': [0, 0, 1, 2, 0, 0],
    'q30-3': [0, 0, 0, 0, 2, 0],
    'q30-4': [1, 1, 0, 0, 0, 0],

    'q31-1': [2, 1, 0, 2, 0, 0],
    'q31-2': [0, 0, 0, 0, 4, 2],
    'q31-3': [0, 0, 1, 0, 0, 0],

    'q32-1': [0, 0, 0, 0, 2, 4],
    'q32-2': [0, 0, 0, 0, 0, 0],

    'q33-1': [0, 0, 0, 0, 2, 4],
    'q33-2': [0, 0, 1, 1, 0, 0],
    'q33-3': [0, 0, 0, 0, 0, 0],

    'q34-1': [2, 2, 0, 0, 0, 0],
    'q34-2': [0, 0, 0, 1, 2, 0],
    'q34-3': [0, 0, 1, 0, 0, 0],

    'q35-1': [0, 0, 0, 0, 2, 0],
    'q35-2': [0, 0, 2, 1, 0, 1],
    'q35-3': [2, 1, 0, 0, 0, 0],

    'q36-1': [2, 2, 1, 0, 0, 0],
    'q36-2': [0, 0, 0, 0, 0, 0],

    'q37-1': [0, 0, 0, 2, 2, 0],
    'q37-2': [0, 0, 1, 0, 0, 1],
    'q37-3': [0, 0, 0, 0, 0, 0],

    'q38-1': [4, 0, 0, 0, 0, 0],
    'q38-2': [0, 4, 2, 0, 0, 0],
    'q38-3': [0, 0, 0, 4, 0, 0],
    'q38-4': [0, 0, 0, 0, 2, 1],

    'q39-1': [0, 0, 0, 0, 0, 4],
    'q39-2': [0, 0, 0, 0, 2, 0],
    'q39-3': [0, 2, 0, 0, 0, 0],
    'q39-4': [0, 0, 2, 2, 0, 0],

    'q40-1': [4, 2, 0, 0, 0, 0],
    'q40-2': [0, 0, 4, 2, 4, 0],
    'q40-3': [0, 0, 0, 0, 0, 4]
  },

  chartConfig: {
    type: 'radar',
    data: {
      labels: ["カメラタイプ", "3Dタイプ", "ファンタジータイプ", "辞書タイプ", "ラジオタイプ", "サウンドタイプ"],
      datasets: [{
        label: "あなたの特性",
        backgroundColor: Chart.helpers.color(colorSet.red).alpha(0.5).rgbString(),
        borderColor: colorSet.red,
        pointBackgroundColor: colorSet.red,
        data: []
      }]
    },
    options: {
      animation: false,
      showTooltips: false,
      legend: {
        position: 'bottom'
      },
      title: {
        display: true,
        fontSize: 14,
        fontColor: '#666'
      },
      scale: {
        display: true,
        pointLabels: {
          fontSize: 10,
          fontColor: colorSet.blue
        },
        ticks: {
          display: true,
          fontSize: 12,
          fontColor: colorSet.blue,
          beginAtZero: true
        },
        gridLines: {
          display: true,
          color: colorSet.blue
        }
      }
    }
  },
  excellent: '◎',
  good: '◯',
  poor: '△',
}