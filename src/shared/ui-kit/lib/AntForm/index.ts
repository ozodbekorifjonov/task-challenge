import { Form } from 'antd';

import AntFormErrorList from './AntFormErrorList.tsx';
import AntFormItem from './AntFormItem.tsx';
import AntFormList from './AntFormList.tsx';
import InternalForm from './InternalForm.tsx';
import { AntdProvider } from '../antd-provider';

const { useForm, useFormInstance, useWatch } = Form;

type CompoundedComponent = typeof InternalForm & {
  useForm: typeof useForm;
  useFormInstance: typeof useFormInstance;
  useWatch: typeof useWatch;
  Item: typeof AntFormItem;
  List: typeof AntFormList;
  ErrorList: typeof AntFormErrorList;
  Provider: typeof AntdProvider;
};

const AntForm = InternalForm as CompoundedComponent;
AntForm.useForm = useForm;
AntForm.useFormInstance = useFormInstance;
AntForm.useWatch = useWatch;
AntForm.Item = AntFormItem;
AntForm.List = AntFormList;
AntForm.ErrorList = AntFormErrorList;
AntForm.Provider = AntdProvider;

export type {
  AntFormErrorListProps,
  AntFormItemProps,
  AntFormListProps,
  AntFormProps,
  AntFormProviderProps,
  AntFormInstance,
} from './types.ts';

export default AntForm;
