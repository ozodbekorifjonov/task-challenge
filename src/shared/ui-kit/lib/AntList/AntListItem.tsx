import { List } from 'antd';

import type { AntListItemProps } from './types.ts';

type IProps = AntListItemProps;

const AntListItem = (props: IProps) => {
  return <List.Item {...props} />;
};

export default AntListItem;
