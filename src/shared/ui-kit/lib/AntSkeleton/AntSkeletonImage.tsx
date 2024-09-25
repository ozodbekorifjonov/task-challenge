import { Skeleton } from 'antd';

import type { AntSkeletonImageProps } from './types.ts';

type IProps = AntSkeletonImageProps;

const AntSkeletonImage = (props: IProps) => {
  return <Skeleton.Image {...props} />;
};

export default AntSkeletonImage;
