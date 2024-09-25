import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

type SeriesItem = {
  name: string;
  data: Array<number>;
};

type Props = {
  options: ApexOptions;
  series: SeriesItem[] | number[];
};

export default function DonutChart(props: Props) {
  const { options, series } = props;
  return <ReactApexChart options={options} series={series} type='donut' />;
}
