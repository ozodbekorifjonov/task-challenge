import type { ErrorListProps, FormInstance, FormListProps } from 'antd/es/form';
import type { FormProviderProps } from 'antd/es/form/context';

import type { FormItemProps, FormProps } from 'antd';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AntFormProps<T = any> = FormProps<T>;
export type AntFormProviderProps = FormProviderProps;
export type AntFormListProps = FormListProps;
export type AntFormItemProps<T> = FormItemProps<T>;
export type AntFormErrorListProps = ErrorListProps;
export type AntFormInstance = FormInstance;
