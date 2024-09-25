import { InputNumber } from 'antd';

import type { AntInputNumberProps } from './types.ts';

type IProps = AntInputNumberProps;
const AntInputNumber = (props: IProps) => {
  return <InputNumber {...props} />;
};

export default AntInputNumber;
