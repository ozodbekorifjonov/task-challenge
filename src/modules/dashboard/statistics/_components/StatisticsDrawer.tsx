import { Table, TableColumnsType, TableProps } from 'antd';
import React, { useState } from 'react';

import {
  AntdButton,
  AntDrawer,
  AntInput,
  AntInputProps,
} from '../../../../shared/ui-kit';
import { Icon, IconName } from '../../../../icons/src';
import useCustomSearchParams from '../../../../hooks/useCustomSearchParams.tsx';
import { RequestConfigAPI } from '../../../../constants';
import { ISeriesDetails } from '../_types';

interface IProps {
  open: boolean;
  onClose: () => void;
}

const columns: TableColumnsType<ISeriesDetails> = [
  {
    title: 'Title',
    dataIndex: 'title',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Start date',
    dataIndex: 'observation_start',
  },
  {
    title: 'End date',
    dataIndex: 'observation_end',
  },
];

const rowSelection: TableProps<ISeriesDetails>['rowSelection'] = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: ISeriesDetails[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows,
    );
  },
  getCheckboxProps: (record: ISeriesDetails) => ({
    disabled: record.title === 'Disabled User',
    name: record.title,
  }),
};

const StatisticsDrawer = ({ onClose, open }: IProps) => {
  const { get } = useCustomSearchParams();

  const searchParams = get([RequestConfigAPI.search as string]);

  const [searchValue, setSearchValue] = useState<string>(
    searchParams[RequestConfigAPI.search] as string,
  );

  const { setWithDebounce } = useCustomSearchParams();

  const handleSubmit = () => {
    onClose();
  };

  const handleChangeSearch: AntInputProps['onChange'] = (e) => {
    const value = e.target.value;

    setSearchValue(value);

    setWithDebounce(
      RequestConfigAPI.search,
      value,
      RequestConfigAPI.paramDelayTime500,
    );
  };

  return (
    <AntDrawer
      title={'Adding a chart'}
      open={open}
      footer={
        <div className='flex items-center justify-end gap-4'>
          <AntdButton
            onClick={() => onClose()}
            type='text'
            danger
            theme='success'
          >
            Close
          </AntdButton>
          <AntdButton onClick={handleSubmit} type='primary' theme='success'>
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
        placeholder={'Search'}
        onChange={handleChangeSearch}
        className='xl:max-w-[25rem] max-w-[18rem] w-full flex'
        theme='gray'
      />
      <div className='mt-6'>
        <Table<ISeriesDetails>
          rowSelection={{ type: 'radio', ...rowSelection }}
          columns={columns}
          dataSource={[]}
        />
      </div>
    </AntDrawer>
  );
};

export default StatisticsDrawer;
