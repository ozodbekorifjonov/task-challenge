import { ColumnProps } from 'antd/es/table';

import { Table } from 'antd';

type IProps<T> = ColumnProps<T>;

const AntTableColumn = <T extends object>(props: IProps<T>) => {
  return <Table.Column<T> {...props} />;
};

export default AntTableColumn;
