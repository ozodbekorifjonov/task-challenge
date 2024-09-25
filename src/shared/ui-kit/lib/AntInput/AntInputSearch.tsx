import { Input } from 'antd';

import type { AntSearchProps } from './types.ts';
type IProps = AntSearchProps;

const AntInputSearch = (props: IProps) => {
  return <Input.Search {...props} />;
};

export default AntInputSearch;
