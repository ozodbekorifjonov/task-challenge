import type { AnyObject } from 'antd/es/_util/type';
import { Table } from 'antd';

import { AntTableColumnGroupsProps } from './types.ts';

type IProps<T> = AntTableColumnGroupsProps<T>;

const AntTableColumnGroup = <T extends AnyObject>(props: IProps<T>) => {
  return <Table.ColumnGroup {...props} />;
};

export default AntTableColumnGroup;
