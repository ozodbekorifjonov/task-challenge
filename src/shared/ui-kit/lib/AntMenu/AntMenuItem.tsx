import { Menu } from 'antd';

import type { AntMenuItemProps } from './types.ts';

type IProps = AntMenuItemProps;

const AntMenuItem = (props: IProps) => {
  return <Menu.Item {...props} />;
};

export default AntMenuItem;
