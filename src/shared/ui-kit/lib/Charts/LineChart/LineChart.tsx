import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

type SeriesItem = {
  name: string;
  data: Array<{ x: string; y: number }>;
};

type Props = {
  options: ApexOptions;
  series: SeriesItem[];
};

function LineChart(props: Props) {
  const { options, series } = props;

  return (
    <ReactApexChart
      options={options}
      series={series}
      type='area'
      height='100%'
    />
  );
}

export default LineChart;
