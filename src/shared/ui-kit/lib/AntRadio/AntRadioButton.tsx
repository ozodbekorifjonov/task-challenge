import { Radio } from 'antd';

import type { AntRadioButtonProps } from './types.ts';

type IProps = AntRadioButtonProps;

const AntRadioButton = (props: IProps) => {
  return <Radio.Button {...props} />;
};

export default AntRadioButton;
