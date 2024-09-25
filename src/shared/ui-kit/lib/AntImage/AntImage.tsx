import { Image } from 'antd';

import type { AntImageProps } from './types.ts';

type IProps = AntImageProps;

const AntImage = (props: IProps) => {
  return <Image {...props} />;
};

export default AntImage;
