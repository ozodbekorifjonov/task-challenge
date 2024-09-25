import { Skeleton } from 'antd';

import type { AntSkeletonNodeProps } from './types.ts';

type IProps = AntSkeletonNodeProps;

const AntSkeletonNode = (props: IProps) => {
  return <Skeleton.Node {...props} />;
};

export default AntSkeletonNode;
