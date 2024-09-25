import { Card } from 'antd';

import type { AntCardGridProps } from './types.ts';

type IProps = AntCardGridProps;

const AntCardGrid = (props: IProps) => {
  return <Card.Grid {...props} />;
};

export default AntCardGrid;
