import { useState } from 'react';
import { ApexOptions } from 'apexcharts';

import { useAppSelector } from '../../../../../store/hooks.ts';
import { selectStatisticObservations } from '../_store';
import { AntSelect, Chart } from '../../../../../shared/ui-kit';
import { chartOptions, colorOptions } from '../_constants';

type ChartType = 'area' | 'line' | 'bar';

const StatisticDetailsChart = () => {
  const { isLoadingSeriesObservations, seriesObservations } = useAppSelector(
    selectStatisticObservations,
  );

  const [chartType, setChartType] = useState<ChartType>('area');
  const [chartColor, setChartColor] = useState<string>('#1E90FF');

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
      type: chartType,
      height: 350,
      zoom: {
        enabled: true,
      },
      toolbar: {
        show: true,
      },
    },
    colors: [chartColor],
    xaxis: {
      type: 'datetime',
      labels: {
        datetimeUTC: false,
      },
    },
    yaxis: {
      labels: {
        formatter: function (val: number) {
          return val.toFixed(2);
        },
      },
      title: {
        text: 'Value',
      },
    },
    tooltip: {
      x: {
        format: 'yyyy-MM-dd',
      },
    },
    title: {
      text: 'Series Observations',
      align: 'center',
      style: {
        fontSize: '16px',
        fontWeight: 'bold',
      },
    },
    // Additional customization options can be added here
  };

  const handleChartTypeChange = (value: ChartType) => {
    setChartType(value);
  };

  const handleChartColorChange = (value: string) => {
    setChartColor(value);
  };

  return (
    <div>
      <div className='my-4 flex flex-row justify-between items-center'>
        <div>
          <label htmlFor='chartType' className='mr-2 font-medium text-gray-700'>
            Select Chart Type:
          </label>
          <AntSelect
            id='chartType'
            value={chartType}
            onChange={handleChartTypeChange}
            style={{ width: 200 }}
            options={chartOptions}
          />
        </div>
        <div>
          <label
            htmlFor='chartColor'
            className='mr-2 font-medium text-gray-700'
          >
            Select Chart Color:
          </label>
          <AntSelect
            id='chartColor'
            value={chartColor}
            onChange={handleChartColorChange}
            style={{ width: 200 }}
            options={colorOptions}
          />
        </div>
      </div>
      <div style={{ height: '400px' }} className='my-4'>
        <Chart options={options} series={series} type={chartType} />
      </div>
    </div>
  );
};

export default StatisticDetailsChart;
