import { Row } from 'antd';

import type { AntRowProps } from './types.ts';

type IProps = AntRowProps;

const AntRow = (props: IProps) => {
  return <Row {...props} />;
};

export default AntRow;
