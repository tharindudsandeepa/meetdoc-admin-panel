import React from 'react';
import "./chart.css";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Dec',
    Revenue: 425.78,
    
  },
  {
    name: 'Jan',
    Revenue: 567.89,
    
  },
  {
    name: 'Feb',
    Revenue: 311.06,
  },
  {
    name: 'Mar',
    Revenue: 325.78,
  },
  {
    name: 'Apr',
    Revenue: 198.78,
  },
  {
    name: 'May',
    Revenue: 303.01,
  },
  {
    name: 'Jun',
    Revenue: 345.78,
  },
];


function Chart() {
  return (
    <div className='chart'>
       <div className="chart-title">Revenue - Last 6 months</div>
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Revenue" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart;