import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import './PieChart.css';
import CircleIcon from '@mui/icons-material/Circle';

const Piechart = () => {
  return (
    <>
    <div className="pie-chart-container">
    <PieChart
    colors={['pink','blue']}
  series={[
    {
      data: [
        { id: 0, value: 15},
        { id: 1, value: 10},
        
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
  width={300}
  height={280}
/>

    <div className="pie-chart-labels">
        <span className='pie-chart-labels'> <CircleIcon className='girls'/>Girls</span>
        <span className='pie-chart-labels'> <CircleIcon className='boys'/>Boys</span>
    </div>
  </div>
</>
  )
}

export default Piechart

