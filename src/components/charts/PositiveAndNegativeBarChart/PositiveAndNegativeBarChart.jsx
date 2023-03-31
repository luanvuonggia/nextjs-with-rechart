import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
} from 'recharts';

const data = [
  {
    name: '06 March',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '07 March',
    uv: -3000,
    pv: 8908,
    amt: 2210,
  },
  {
    name: '08 March',
    uv: -2000,
    pv: -9800,
    amt: 2290,
  },
  {
    name: '09 March',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '10 March',
    uv: 2780,
    pv: -5000,
    amt: 2000,
  },
  {
    name: '11 March',
    uv: 2780,
    pv: 908,
    amt: 2000,
  },
];

const PositiveAndNegativeBarChart = () =>  {
  return (
      <BarChart
        width={825}
        height={541}
        data={data}
        maxBarSize={79}
      >
        <CartesianGrid strokeWidth={1} stroke="#DEDEE7"/>
        <XAxis dataKey="name" tickLine={false} stroke="#DEDEE7" tick={{ fill: "#5F5F76", fontSize: 12 }} />
        <YAxis tickLine={false} stroke="#DEDEE7" tick={{ fill: "#5F5F76", fontSize: 12 }} />
        <Bar dataKey="pv" fill={"#4FB5C9"}>{
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.pv > 0 ? "#4FB5C9": "#F05D5E"} radius={ [10, 10, 0, 0] }/>
            ))}
        </Bar>
      </BarChart>
  );
}
export default PositiveAndNegativeBarChart;
