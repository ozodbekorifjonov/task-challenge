import { Menu } from 'antd';

import type { AntMenuProps } from './types.ts';

type IProps = AntMenuProps;

const InternalMenu = (props: IProps) => {
  return <Menu {...props} />;
};

export default InternalMenu;
