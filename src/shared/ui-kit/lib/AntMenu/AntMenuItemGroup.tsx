import { Menu } from 'antd';

import type { AntMenuProps } from './types.ts';

type IProps = AntMenuProps;
const AntMenuItemGroup = (props: IProps) => {
  return <Menu.ItemGroup {...props} />;
};

export default AntMenuItemGroup;
