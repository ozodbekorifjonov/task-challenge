import type {
  BaseOptionType,
  DefaultOptionType,
  OptionProps,
} from 'antd/es/select';

import { SelectProps } from 'antd';

export type AntSelectProps<
  ValueType,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType,
> = SelectProps<ValueType, OptionType>;

type AntSelectOptBaseType = {
  isSelectOption?: boolean;
};
export type AntSelectOptionProps = OptionProps & AntSelectOptBaseType;
export type AntSelectOptGroupProps<T> = SelectProps<T> & AntSelectOptBaseType;
