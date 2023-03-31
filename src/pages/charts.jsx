import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { LineChart } from "../components/charts/LineChart";
import { RadialBarChart } from "../components/charts/RadialBarChart";
import { PositiveAndNegativeBarChart } from "../components/charts/PositiveAndNegativeBarChart";
const Charts = () => (
  <Main meta={<Meta title="Charts" description="charts" />}>
    <LineChart></LineChart>
    <br/>
    <RadialBarChart></RadialBarChart>
    <br/>
    <PositiveAndNegativeBarChart></PositiveAndNegativeBarChart>
  </Main>
);

export default Charts;
