import { useNavigate } from 'react-router-dom';

import { AntdButton } from '../../../../../shared/ui-kit';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks.ts';
import { selectStatisticDetails } from '../_store';
import { deleteSeriesById } from '../../_store';
import { paths } from '../../../../../routes/paths';

const StatisticDetailsTools = () => {
  const { seriesDetails } = useAppSelector(selectStatisticDetails);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onDelete = () => {
    const id = seriesDetails?.seriess[0].id;
    if (id) {
      dispatch(deleteSeriesById({ id }));
    }
    navigate(paths.dashboard.statistics);
  };

  return (
    <div className='flex items-center justify-start gap-4'>
      <AntdButton
        onClick={onDelete}
        className='flex items-center'
        type='primary'
        danger
      >
        Delete
      </AntdButton>
    </div>
  );
};

export default StatisticDetailsTools;
