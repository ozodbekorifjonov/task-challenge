import { Menu } from 'antd';

import type { AntDividerProps } from './types.ts';

type IProps = AntDividerProps;

const AntMenuDivider = (props: IProps) => {
  return <Menu.Divider {...props} />;
};

export default AntMenuDivider;
