import { Avatar } from 'antd';

import type { AntAvatarProps } from './types.ts';

type IProps = AntAvatarProps;

const InternalAvatar = (props: IProps) => {
  return <Avatar {...props} />;
};

export default InternalAvatar;
