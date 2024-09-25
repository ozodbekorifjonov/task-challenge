import { Select } from 'antd';

import type { AntSelectOptionProps } from './types.ts';

type IProps = AntSelectOptionProps;

const AntSelectOption = (props: IProps) => {
  return <Select.Option {...props} />;
};

export default AntSelectOption;
