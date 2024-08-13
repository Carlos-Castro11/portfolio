/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Chart from 'react-apexcharts'

// eslint-disable-next-line @typescript-eslint/ban-types
class Graphic extends React.Component<{}, { options: any; series: any }> {
  constructor(props: any) {
    super(props)

    this.state = {
      options: {
        dataLabels: {
          enabled: false,
        },
        chart: {
          id: 'basic-bar',
          stacked: true,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            borderRadius: 5,
            columnWidth: '40%',
          },
        },
        xaxis: {
          categories: ['Python', 'Tailwind', 'Typescript', 'C#'],
        },
        yaxis: {
          show: true,
          min: 1,
          max: 10,
        },
      },
      series: [
        {
          data: [
            {
              x: 'Python',
              y: 6,
              fillColor: '#ffe',
            },
            {
              x: 'Category B',
              y: 7,
              fillColor: '#ffe',
            },
            {
              x: 'Category C',
              y: 9,
              fillColor: '#ffe',
            },
            {
              x: 'Category C',
              y: 8,
              fillColor: '#ffe',
            },
          ],
        },
      ],
    }
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="325"
              strokeColor="#775DD0"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Graphic
