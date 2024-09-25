import type {
  GroupProps,
  InputRef,
  PasswordProps,
  SearchProps,
  TextAreaProps,
} from 'antd/es/input';
import type { OTPProps } from 'antd/es/input/OTP';

import type { InputProps } from 'antd';

export type AntSearchProps = SearchProps;
export type AntTextAreaProps = TextAreaProps;
export type AntPasswordProps = PasswordProps;
export type AntOTPProps = OTPProps;
export type AntGroupProps = GroupProps;
export type AntInputRef = InputRef;
export type AntInputProps = { loading?: boolean } & InputProps;
export type AntInputThemeUnion = 'gray';
export interface ICustomProps {
  custom?: true;
  theme: AntInputThemeUnion;
}
export interface IDefaultProps {
  custom?: false;
  theme?: never;
}
