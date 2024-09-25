import { Skeleton } from 'antd';

import type { AntSkeletonInputProps } from './types.ts';

type IProps = AntSkeletonInputProps;

const AntSkeletonInput = (props: IProps) => {
  return <Skeleton.Input {...props} />;
};

export default AntSkeletonInput;
