import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import  LineChart  from "../components/charts/LineChart/LineChart.jsx";

const Charts = () => (
  <Main meta={<Meta title="Charts" description="charts" />}>
    <LineChart></LineChart>
  </Main>
);

export default Charts;
