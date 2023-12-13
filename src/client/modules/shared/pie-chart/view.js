import { Box } from '@mui/system';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 8000 },
  { name: 'Group B', value: 6400 },
  { name: 'Group C', value: 5229 },
  { name: 'Group D', value: 3478},
];
const COLORS = ['#ed507a', '#546bfa', '#04a9f4', '#3a9689'];

 const PieChartView = ()=> {



    return (
      
      <PieChart width={400} height={400} >
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie dataKey="Toys" fill="#ed507a" />
          <Pie dataKey="Fashions" fill="#546bfa" />
          <Pie dataKey="Electronics" fill="#04a9f4" />
          <Pie dataKey="Vouchers" fill="#3a9689" />
      </PieChart>
     
    );
  
}
export default PieChartView;
