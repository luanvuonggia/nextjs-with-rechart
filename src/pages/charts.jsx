import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { LineChart, RadialBarChart, PositiveAndNegativeBarChart, AreaChart } from "@/components/charts";
import { GroupProgressBar } from "@/components/ProgressBar";
const testData = [
  { bgcolor: "#4FB5C9", completed: 92 },
  { bgcolor: "#F05D5E", completed: 17 },
  { bgcolor: "#B4B4B4", completed: 1 },
];

const Charts = () => (
  <Main meta={<Meta title="Charts" description="charts" />}>
    <LineChart></LineChart>
    <br/>
    <RadialBarChart></RadialBarChart>
    <br/>
    <PositiveAndNegativeBarChart></PositiveAndNegativeBarChart>
    <br/>
    <GroupProgressBar height={192} data={testData}></GroupProgressBar>
    <br/>
    <AreaChart></AreaChart>
    <AreaChart isNegative></AreaChart>
  </Main>
);

export default Charts;
