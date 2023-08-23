import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import './PieChart.css';

const Piechart = () => {
  return (
    <PieChart
    colors={['pink','blue']}
  series={[
    {
      data: [
        { id: 0, value: 15, label: 'Girls' },
        { id: 1, value: 10, label: 'Boys' },
        
      ],
      innerRadius: 50,
      outerRadius: 100,
      paddingAngle: 3,
      cornerRadius: 5,
      startAngle: -180,
      endAngle: 180,
      cx: 150,
      cy: 150,
    },
  ]}
  width={400}
  height={400}
/>
  )
}

export default Piechart

