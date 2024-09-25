import { Radio } from 'antd';

import type { AntRadioProps } from './types.ts';
type IProps = AntRadioProps;

const InternalList = (props: IProps) => {
  return <Radio {...props} />;
};

export default InternalList;
