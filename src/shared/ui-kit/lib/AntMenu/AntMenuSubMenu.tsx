import { Menu } from 'antd';

import type { AntSubMenuProps } from './types.ts';

type IProps = AntSubMenuProps;
const AntMenuSubMenu = (props: IProps) => {
  return <Menu.SubMenu {...props} />;
};

export default AntMenuSubMenu;
