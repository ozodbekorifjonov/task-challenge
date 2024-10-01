import { ApexOptions } from 'apexcharts';

import { useAppSelector } from '../../../../../store/hooks.ts';
import { selectStatisticObservations } from '../_store';
import { LineChart } from '../../../../../shared/ui-kit';

const StatisticDetailsChart = () => {
  const { isLoadingSeriesObservations, seriesObservations } = useAppSelector(
    selectStatisticObservations,
  );

  if (!seriesObservations || isLoadingSeriesObservations) {
    return null;
  }

  const seriesData = seriesObservations.observations
    .filter((observation) => observation.value !== '.')
    .map((observation) => ({
      x: observation.date,
      y: parseFloat(observation.value),
    }));

  const series = [
    {
      name: 'Observation Value',
      data: seriesData,
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: 'area',
      height: 350,
      zoom: {
        enabled: true,
      },
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      labels: {
        formatter: function (val: number) {
          return val.toFixed(2);
        },
      },
    },
    tooltip: {
      x: {
        format: 'yyyy-MM-dd',
      },
    },
    // Additional customization options
  };

  return (
    <div style={{ height: '400px' }} className='my-4'>
      <LineChart options={options} series={series} />
    </div>
  );
};

export default StatisticDetailsChart;
