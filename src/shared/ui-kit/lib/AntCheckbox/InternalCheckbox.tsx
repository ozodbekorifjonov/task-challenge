import { Checkbox } from 'antd';

import type { AntCheckboxProps } from './types.ts';

type IProps = AntCheckboxProps;

const InternalCheckbox = (props: IProps) => {
  return <Checkbox {...props} />;
};

export default InternalCheckbox;
