import { useNavigate } from 'react-router-dom';

import { ISeriesDetails } from '../_types';
import { paths } from '../../../../routes/paths';

const StatisticItem = ({
  label,
  value,
  className,
}: {
  label: string;
  value: string | number;
  className?: string;
}) => (
  <div className='flex mb-2 justify-between'>
    <span className='font-medium w-40'>{label}:</span>
    <span className={`text-gray-700 ${className}`}>{value}</span>
  </div>
);

const StatisticInfoCard = ({
  series,
  longNote = false,
}: {
  series: ISeriesDetails | null;
  longNote?: boolean;
}) => {
  const navigate = useNavigate();

  if (!series) {
    return null;
  }

  if (!series) {
    return <div>No series data available.</div>;
  }

  const handleNavigate = (id: string) => {
    navigate(`${paths.dashboard.statistics}/${id}`);
  };

  return (
    <div
      onClick={() => handleNavigate(series?.id)}
      className='xl:rounded-[1.5rem] rounded-[1rem] overflow-hidden border border-gray-200 shadow-md flex flex-col relative cursor-pointer p-6 bg-white'
    >
      <h2 className='text-2xl font-semibold mb-4 text-gray-800'>
        {series.title}
      </h2>
      <div>
        <StatisticItem label='ID' value={series.id} />
        <StatisticItem label='Units' value={series.units} />
        <StatisticItem label='Frequency' value={series.frequency} />
        <StatisticItem
          label='Observation Start'
          value={series.observation_start}
        />
        <StatisticItem label='Observation End' value={series.observation_end} />
        <StatisticItem
          label='Last Updated'
          value={new Date(series.last_updated).toLocaleDateString()}
        />
        <StatisticItem label='Popularity' value={series.popularity} />
        {series.notes && (
          <StatisticItem
            label='Notes'
            value={series.notes}
            className={`${longNote ? '' : 'line-clamp-3'}`}
          />
        )}
      </div>
    </div>
  );
};

export default StatisticInfoCard;
