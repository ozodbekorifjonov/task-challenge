import { AnyObject } from 'antd/es/_util/type';
import { ColumnGroupProps } from 'antd/es/table/ColumnGroup';

import { TableColumnsType, TableProps } from 'antd';

export type AntTableProps<T = AnyObject> = TableProps<T>;
export type AntTableColumnsType<T = AnyObject> = TableColumnsType<T>;
export type AntTableColumnGroupsProps<T> = ColumnGroupProps<T>;
