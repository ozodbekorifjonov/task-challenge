import { Space } from 'antd';

import type { AntSpaceCompactProps } from './types.ts';

type IProps = AntSpaceCompactProps;

const AntSpaceCompact = (props: IProps) => {
  return <Space.Compact {...props} />;
};

export default AntSpaceCompact;
