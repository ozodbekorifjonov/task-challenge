import { Form } from 'antd';

import type { AntFormListProps } from './types.ts';

type IProps = AntFormListProps;

const AntFormList = (props: IProps) => {
  return <Form.List {...props} />;
};

export default AntFormList;
