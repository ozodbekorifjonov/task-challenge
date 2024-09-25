import { Avatar } from 'antd';

import type { AntAvatarGroupProps } from './types.ts';

type IProps = AntAvatarGroupProps;

const AntAvatarGroup = (props: IProps) => {
  return <Avatar.Group {...props} />;
};

export default AntAvatarGroup;
