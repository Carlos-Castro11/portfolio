import { useEffect, useState } from 'react'
import ApexChart from 'react-apexcharts'

import { useTheme } from './theme/theme-provider'

export function Graphic() {
  const { theme } = useTheme()

  const [barColor, setBarColor] = useState<string>('#fff')

  useEffect(() => {
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'
      systemTheme === 'dark' ? setBarColor('#fff') : setBarColor('#000')
    }
    if (theme === 'light') setBarColor('#000')
    else {
      setBarColor('#fff')
    }
  }, [theme])

  const options: ApexCharts.ApexOptions | undefined = {
    tooltip: {
      enabled: false,
    },
    xaxis: {
      labels: {
        style: {
          colors: barColor,
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
          y: [9],
          fillColor: barColor,
        },
        {
          x: 'TS',
          y: [9],
          fillColor: barColor,
        },
        {
          x: 'Inglês',
          y: [8],
          fillColor: barColor,
        },
        {
          x: 'C#',
          y: [8],
          fillColor: barColor,
        },
        {
          x: 'SQL',
          y: [8],
          fillColor: barColor,
        },
        {
          x: 'Tailwind',
          y: [7],
          fillColor: barColor,
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
