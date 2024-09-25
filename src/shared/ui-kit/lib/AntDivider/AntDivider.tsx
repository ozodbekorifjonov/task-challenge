import { Divider } from 'antd';

import type { AntDividerProps } from './types.ts';

type IProps = AntDividerProps;

const AntDivider = (props: IProps) => {
  return <Divider {...props} />;
};

export default AntDivider;
