import { Table } from 'antd';

import { AntTableProps } from './types.ts';

type IProps<T> = AntTableProps<T>;

const AntTableSummary = <T,>(props: IProps<T>) => {
  return <Table.Summary {...props} />;
};

export default AntTableSummary;
