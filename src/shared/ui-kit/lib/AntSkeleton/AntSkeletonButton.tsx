import { Skeleton } from 'antd';

import type { AntSkeletonButtonProps } from './types.ts';

type IProps = AntSkeletonButtonProps;

const AntSkeletonButton = (props: IProps) => {
  return <Skeleton.Button {...props} />;
};

export default AntSkeletonButton;
