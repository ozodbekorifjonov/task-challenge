import { Form } from 'antd';

import type { AntFormErrorListProps } from './types.ts';

type IProps = AntFormErrorListProps;

const AntFormErrorList = (props: IProps) => {
  return <Form.ErrorList {...props} />;
};

export default AntFormErrorList;
