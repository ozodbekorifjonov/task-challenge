import { Select } from 'antd';

import type { AntSelectOptGroupProps } from './types.ts';

type IProps<T> = AntSelectOptGroupProps<T>;

const AntSelectOptGroup = <T,>(props: IProps<T>) => {
  return <Select.OptGroup {...props} />;
};

export default AntSelectOptGroup;
