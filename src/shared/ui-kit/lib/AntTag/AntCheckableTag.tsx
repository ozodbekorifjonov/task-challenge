import { Tag } from 'antd';

import type { AntCheckableTagProps } from './types.ts';

type IProps = AntCheckableTagProps;

const AntCheckableTag = (props: IProps) => {
  return <Tag.CheckableTag {...props} />;
};

export default AntCheckableTag;
