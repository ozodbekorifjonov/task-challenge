import { Radio } from 'antd';

import type { AntRadioGroupProps } from './types.ts';

type IProps = AntRadioGroupProps;

const AntRadioGroup = (props: IProps) => {
  return <Radio.Group {...props} />;
};

export default AntRadioGroup;
