import dynamic from 'next/dynamic'

const LineChart = dynamic(() => import('./LineChart'), {
  loading: () => <p>Loading...</p>,
})
const AreaChart = dynamic(() => import('./AreaChart'), {
  loading: () => <p>Loading...</p>,
})
const PositiveAndNegativeBarChart = dynamic(() => import('./PositiveAndNegativeBarChart'), {
  loading: () => <p>Loading...</p>,
})
const RadialBarChart = dynamic(() => import('./RadialBarChart'), {
  loading: () => <p>Loading...</p>,
})
export { LineChart, PositiveAndNegativeBarChart, RadialBarChart, AreaChart };