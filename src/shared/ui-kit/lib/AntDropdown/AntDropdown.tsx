import { Dropdown } from 'antd';

import type { AntDropdownProps } from './types.ts';

type IProps = AntDropdownProps;

const AntDropdown = (props: IProps) => {
  return <Dropdown {...props} />;
};

export default AntDropdown;
