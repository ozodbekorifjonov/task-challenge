import { Form } from 'antd';

import type { AntFormProps } from './types.ts';

type FormType = (<Values>(
  props: React.PropsWithChildren<AntFormProps<Values>>,
) => React.ReactElement) &
  Pick<React.FC<object>, 'displayName'>;

const InternalForm: FormType = (props) => {
  return <Form {...props} />;
};

export default InternalForm;
