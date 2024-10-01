import React, { useCallback, useMemo, useState } from 'react';
import { Table, TableColumnsType, TableProps } from 'antd';

import {
  AntdButton,
  AntDrawer,
  AntInput,
  AntInputProps,
} from '../../../../shared/ui-kit';
import { Icon, IconName } from '../../../../icons/src';
import useCustomSearchParams from '../../../../hooks/useCustomSearchParams';
import { RequestConfigAPI } from '../../../../constants';
import { ISeriesDetails } from '../_types';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks.ts';
import { addSeriesToSeriesList, selectSearchedStatisticsList } from '../_store';

interface IProps {
  open: boolean;
  onClose: () => void;
}

const StatisticsDrawer: React.FC<IProps> = ({ onClose, open }) => {
  const { get, setWithDebounce } = useCustomSearchParams();

  const searchParams = get(RequestConfigAPI.search);

  const initialSearchValue = searchParams[RequestConfigAPI.search] || '';

  const [searchValue, setSearchValue] = useState<string>(initialSearchValue);
  const [selectedSeries, setSelectedSeries] = useState<ISeriesDetails | null>(
    null,
  );

  const { searchedSeriesResponse, isLoadingSearchSeries } = useAppSelector(
    selectSearchedStatisticsList,
  );

  const dispatch = useAppDispatch();

  const handleChangeSearch: AntInputProps['onChange'] = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchValue(value);
      setWithDebounce(
        RequestConfigAPI.search,
        value,
        RequestConfigAPI.paramDelayTime500,
      );
    },
    [setWithDebounce],
  );

  const handleSubmit = useCallback(() => {
    if (selectedSeries) {
      dispatch(addSeriesToSeriesList({ newSeries: selectedSeries }));
    }
    onClose();
  }, [dispatch, onClose, selectedSeries]);

  const rowSelection: TableProps<ISeriesDetails>['rowSelection'] = useMemo(
    () => ({
      type: 'radio',
      onChange: (
        _selectedRowKeys: React.Key[],
        selectedRows: ISeriesDetails[],
      ) => {
        setSelectedSeries(selectedRows[0]);
      },
      getCheckboxProps: (record: ISeriesDetails) => ({
        disabled: record.title === 'Disabled User',
        name: record.title,
      }),
    }),
    [],
  );

  const columns: TableColumnsType<ISeriesDetails> = useMemo(
    () => [
      {
        title: 'Title',
        dataIndex: 'title',
        render: (text: string) => <span>{text}</span>,
      },
      {
        title: 'Start Date',
        dataIndex: 'observation_start',
        render: (date: string) => new Date(date).toLocaleDateString(),
      },
      {
        title: 'End Date',
        dataIndex: 'observation_end',
        render: (date: string) => new Date(date).toLocaleDateString(),
      },
    ],
    [],
  );

  return (
    <AntDrawer
      title='Adding a Chart'
      open={open}
      footer={
        <div className='flex items-center justify-end gap-4'>
          <AntdButton onClick={onClose} type='text' danger theme='success'>
            Close
          </AntdButton>
          <AntdButton
            disabled={selectedSeries === null}
            onClick={handleSubmit}
            type='primary'
            theme='success'
          >
            Add
          </AntdButton>
        </div>
      }
      onClose={onClose}
      width={800}
    >
      <AntInput
        type='search'
        prefix={
          <Icon
            name={IconName.Search}
            ignoresize
            className='text-neutral40 xl:w-6 xl:h-6 w-5 h-5'
          />
        }
        value={searchValue}
        placeholder='Search for data series'
        onChange={handleChangeSearch}
        className='xl:max-w-[25rem] max-w-[18rem] w-full flex'
        theme='gray'
        aria-label='Search for data series'
      />
      <div className='mt-6'>
        <Table<ISeriesDetails>
          rowSelection={rowSelection}
          columns={columns}
          loading={isLoadingSearchSeries}
          dataSource={searchedSeriesResponse?.seriess}
          rowKey='id'
          pagination={{ pageSize: 10, showSizeChanger: true }}
        />
      </div>
    </AntDrawer>
  );
};

export default StatisticsDrawer;
