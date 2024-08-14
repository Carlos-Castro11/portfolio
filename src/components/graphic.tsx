import ApexChart from 'react-apexcharts'

import { useTheme } from './theme/theme-provider'

export function Graphic() {
  const { theme } = useTheme()

  const primary = theme === 'dark' ? '#fff' : '#000'

  const options: ApexCharts.ApexOptions | undefined = {
    tooltip: {
      enabled: false,
    },
    xaxis: {
      labels: {
        style: {
          colors: primary,
        },
      },
    },
    yaxis: {
      min: 1,
      max: 10,
      labels: {
        show: false,
      },
    },
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
  }

  const series = [
    {
      data: [
        {
          x: 'React.js',
          y: [8],
          fillColor: primary,
        },
        {
          x: 'TS',
          y: [9],
          fillColor: primary,
        },
        {
          x: 'Python',
          y: [6],
          fillColor: primary,
        },
        {
          x: 'C#',
          y: [10],
          fillColor: primary,
        },
        {
          x: 'SQL',
          y: [8],
          fillColor: primary,
        },
        {
          x: 'Tailwind',
          y: [5],
          fillColor: primary,
        },
      ],
    },
  ]

  return (
    <div className="">
      <ApexChart
        className=""
        options={options}
        series={series}
        type="bar"
        width="380"
      />
    </div>
  )
}

export default Graphic
