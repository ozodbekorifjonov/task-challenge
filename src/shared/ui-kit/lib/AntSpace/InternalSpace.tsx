import { Space } from 'antd';

import { AntSpaceProps } from './types.ts';

type IProps = AntSpaceProps;

const InternalSpace = (props: IProps) => {
  return <Space {...props} />;
};

export default InternalSpace;
