import { Skeleton } from 'antd';

import type { AntSkeletonAvatarProps } from './types.ts';

type IProps = AntSkeletonAvatarProps;

const AntSkeletonAvatar = (props: IProps) => {
  return <Skeleton.Avatar {...props} />;
};

export default AntSkeletonAvatar;
