import { Empty } from 'antd';

import type { AntEmptyProps } from './types.ts';

type IProps = AntEmptyProps;

const AntEmpty = (props: IProps) => {
  return <Empty {...props} />;
};

export default AntEmpty;
