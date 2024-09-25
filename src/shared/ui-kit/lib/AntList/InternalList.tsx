import { List } from 'antd';

import type { AntListProps } from './types.ts';

type IProps<T> = AntListProps<T>;

const InternalList = <T,>(props: IProps<T>) => {
  return <List {...props} />;
};

export default InternalList;
