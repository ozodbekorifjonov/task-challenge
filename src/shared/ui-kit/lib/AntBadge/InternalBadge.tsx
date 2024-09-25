import { Badge } from 'antd';

import type { AntBadgeProps } from './types.ts';

type IProps = AntBadgeProps;

const InternalBadge = (props: IProps) => {
  return <Badge {...props} />;
};

export default InternalBadge;
