import { Form } from 'antd';

import type { AntFormProviderProps } from './types.ts';

type IProps = AntFormProviderProps;

const AntFormProvider = (props: IProps) => {
  return <Form.Provider {...props} />;
};

export default AntFormProvider;
