import { IStatisticInfo } from '../_types';

const StatisticItem = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => (
  <div className='flex mb-2 justify-between'>
    <span className='font-medium w-40'>{label}:</span>
    <span className='text-gray-700'>{value}</span>
  </div>
);

const StatisticInfoCard = ({
  data,
}: {
  data: IStatisticInfo | null;
}) => {
  if (!data) {
    return null;
  }

  const { seriess } = data;

  if (!seriess || !seriess.length) {
    return <div>No series data available.</div>;
  }

  const series = seriess[0];

  return (
    <div className='xl:rounded-[1.5rem] rounded-[1rem] overflow-hidden border border-gray-200 shadow-md flex flex-col relative cursor-pointer p-6 bg-white'>
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
        {series.notes && <StatisticItem label='Notes' value={series.notes} />}
      </div>
    </div>
  );
};

export default StatisticInfoCard;
