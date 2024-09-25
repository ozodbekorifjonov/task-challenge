import { Card } from 'antd';

import type { AntCardProps } from './types.ts';

type IProps = AntCardProps;

const InternalCard = (props: IProps) => {
  return <Card {...props} />;
};

export default InternalCard;
