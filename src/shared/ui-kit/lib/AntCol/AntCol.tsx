import { Col } from 'antd';

import type { AntColProps } from './types.ts';

type IProps = AntColProps;

const AntCol = (props: IProps) => {
  return <Col {...props} />;
};

export default AntCol;
