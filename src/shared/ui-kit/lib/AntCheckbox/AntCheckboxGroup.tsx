import { Checkbox } from 'antd';

import type { AntCheckboxGroupProps } from './types.ts';

type IProps = AntCheckboxGroupProps;
const AntCheckboxGroup = (props: IProps) => {
  return <Checkbox.Group {...props} />;
};

export default AntCheckboxGroup;
