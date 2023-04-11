import { AreaChart as AreaReChart, Area, Tooltip } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

const colors = {
  neg: {
    fill: "#F05D5E",
    stopColor: "#FF5656",
    offset: "0%"
  },
  pos: {
    fill: "#4FB5C9",
    stopColor: "#B6F2FF",
    offset: "33.04%"
  }
}

export default function AreaChart({ isNegative }) {
  const color = isNegative? colors.neg : colors.pos;
  return (
    <AreaReChart
      width={160}
      height={70}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <defs>
        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
          <stop offset={color.offset} stopColor={color.stopColor} />
          <stop offset={ isNegative ? "100%": "90.18%"} stopColor="#FFFFFF" />
        </linearGradient>
      </defs>
      <Tooltip />
      <Area
        type="monotone"
        dataKey="uv"
        stroke={color.fill}
        strokeWidth="2"
        fill="url(#color)"
      />
    </AreaReChart>
  );
}