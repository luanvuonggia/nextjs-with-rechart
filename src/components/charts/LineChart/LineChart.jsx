
import { LineChart as LineRechart, Line, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page H", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page I", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page J", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page K", uv: 3490, pv: 4300, amt: 2100 }
];
const LineChart = () => {

  const onMouseMove = (hoveredData) => {
  };

  const onMouseOut = () => {
  };

  return (
    <LineRechart
      width={700}
      height={500}
      data={data}
      onMouseMove={onMouseMove}
      onMouseOut={onMouseOut}
    >
      <defs>
        <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
          <stop offset="0%" stopColor="#9747FF" />
          <stop offset="107.68%" stopColor="#14F4C9" />
        </linearGradient>
      </defs>
      <Line
        type="monotone"
        dataKey="pv"
        stroke="url(#colorUv)"
        strokeWidth={4}
        dot={false}
        activeDot={false}
      />
      <CartesianGrid strokeWidth={1} vertical={false} stroke="#DEDEE7" />
      <XAxis />
      <YAxis />
      <Tooltip />
    </LineRechart>
  )
}
export default LineChart;