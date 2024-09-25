import type {
  BaseOptionType,
  DefaultOptionType,
  RefSelectProps,
} from 'antd/es/select';

import { ConfigProvider, Select } from 'antd';

import { selectThemes } from './theme.ts';
import type { AntSelectProps } from './types.ts';

const themSizes = {
  small: {},
  middle: { controlHeight: 48, borderRadius: 12 },
  large: { controlHeight: 56, borderRadius: 12 },
};

type InternalSelectType = <
  ValueType = unknown,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType,
>(
  props: React.PropsWithChildren<AntSelectProps<ValueType, OptionType>> &
    React.RefAttributes<RefSelectProps> & { color?: string },
) => React.ReactElement;

const InternalSelect: InternalSelectType = ({
  size = 'middle',
  color,
  ...rest
}) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            ...selectThemes,
            ...themSizes[size],
            ...(color ? { colorText: color } : {}),
          },
        },
      }}
    >
      <Select {...rest} />
    </ConfigProvider>
  );
};

export default InternalSelect;
