import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { LineChart } from "../components/charts/LineChart";
import { RadialBarChart } from "../components/charts/RadialBarChart";
import { PositiveAndNegativeBarChart } from "../components/charts/PositiveAndNegativeBarChart";
import { GroupProgressBar } from "../components/ProgressBar";
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
  </Main>
);

export default Charts;
