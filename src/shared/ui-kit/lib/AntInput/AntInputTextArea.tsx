import { Input } from 'antd';

import type { AntTextAreaProps } from './types.ts';
type IProps = AntTextAreaProps;

const AntInputTextArea = (props: IProps) => {
  return <Input.TextArea {...props} />;
};

export default AntInputTextArea;
