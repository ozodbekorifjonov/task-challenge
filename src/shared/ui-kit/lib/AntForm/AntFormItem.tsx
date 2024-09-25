import useFormItemStatus from 'antd/es/form/hooks/useFormItemStatus';

import { Form } from 'antd';

import type { AntFormItemProps } from './types.ts';

type IProps<T> = AntFormItemProps<T>;

const InternalFormItem = <T,>(props: IProps<T>) => {
  return <Form.Item {...props} />;
};

type CompoundedComponent = typeof InternalFormItem & {
  useStatus: typeof useFormItemStatus;
};

const AntFormItem = InternalFormItem as CompoundedComponent;

export default AntFormItem;
