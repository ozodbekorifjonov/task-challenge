import { Skeleton } from 'antd';

import type { AntSkeletonProps } from './types.ts';
type IProps = AntSkeletonProps;

const InternalSkeleton = (props: IProps) => {
  return <Skeleton {...props} />;
};

export default InternalSkeleton;
