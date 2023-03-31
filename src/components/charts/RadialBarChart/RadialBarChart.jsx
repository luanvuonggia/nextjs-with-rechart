import { RadialBarChart as RadialBarReChart, RadialBar, Legend } from "recharts";

const data = [
  {
    name: "stk ABPT",
    uv: 31.47,
    pv: 2400,
    fill: "#F3BA2F"
  },
  {
    name: "arNMX",
    uv: 26.69,
    pv: 4567,
    fill: "#54C2C1"
  },
  {
    name: "wNMC",
    uv: 15.69,
    pv: 1398,
    fill: "#0F0F3F"
  },
  {
    name: "APY",
    uv: 8.22,
    pv: 9800,
    fill: "#9020E9"
  },
];

const style = {
  bottom: 0,
  lineHeight: "32px"
};

const renderLegend = (props) => {
  const { payload } = props;

  return (
    <div style={{ display: 'flex', gap: "24px" }}>
      {
        payload.map((entry, index) => (
          <div>
            <span style={{
              height: "15px",
              width: "15px",
              marginRight: "6px",
              backgroundColor: entry.color,
              borderRadius: "50%",
              display: "inline-block"}} />
            <span style={{ marginRight: "18px" }}>{entry.value}</span>
            <span className="font-semibold text-lg">{entry.payload.uv}</span>
          </div>

        ))
      }
    </div>
  );
}

const RadialBarChart = () =>  {
  return (
    <RadialBarReChart
      width={800}
      height={500}
      cx={250}
      cy={250}
      innerRadius={50}
      outerRadius={140}
      barSize={15}
      data={data}
    >
      <RadialBar
        minAngle={15}
        background
        clockWise
        dataKey="uv"
      />
      <Legend content={renderLegend}/>
    </RadialBarReChart>
  );
}
export default RadialBarChart;