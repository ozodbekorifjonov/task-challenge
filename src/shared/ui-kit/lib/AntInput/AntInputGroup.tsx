import { Input } from 'antd';

import type { AntGroupProps } from './types.ts';

type IProps = AntGroupProps;

const AntInputGroup = (props: IProps) => {
  return <Input.Group {...props} />;
};

export default AntInputGroup;
