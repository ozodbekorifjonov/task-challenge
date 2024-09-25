import { AnyObject } from 'antd/es/_util/type';

import { Table } from 'antd';

import { AntTableProps } from './types.ts';

type IProps<T> = AntTableProps<T>;

const InternalTable = <T extends AnyObject>(props: IProps<T>) => {
  return <Table {...props} />;
};

export default InternalTable;
