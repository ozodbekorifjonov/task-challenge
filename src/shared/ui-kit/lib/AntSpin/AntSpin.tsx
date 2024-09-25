import { Spin } from 'antd';

import type { AntSpinProps } from './types.ts';

type IProps = AntSpinProps;

const AntSpin = (props: IProps) => {
  return <Spin {...props} />;
};

export default AntSpin;
