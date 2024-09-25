import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

type SeriesItem = {
  name: string;
  data: Array<number>;
};

type Props = {
  options?: ApexOptions;
  series?: SeriesItem[] | number[];
};

export default function RadialChart(props: Props) {
  const { options, series = [] } = props;
  return <ReactApexChart options={options} series={series} type='radialBar' />;
}
