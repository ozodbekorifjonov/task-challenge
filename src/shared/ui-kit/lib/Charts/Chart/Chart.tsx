import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

type SeriesItem = {
  name: string;
  data: Array<{ x: string; y: number }>;
};

type ChartType = 'line' | 'area' | 'bar' | 'pie' | 'donut';

type Props = {
  options: ApexOptions;
  series: SeriesItem[];
  type?: ChartType;
};

function Chart(props: Props) {
  const { options, series, type = 'area' } = props;

  return (
    <ReactApexChart
      options={options}
      series={series}
      type={type}
      height='100%'
    />
  );
}

export default Chart;
