import './antInput.css';
import { forwardRef } from 'react';

import { ConfigProvider, Input } from 'antd';

import { inputTypographySizes } from './theme.ts';
import type {
  AntInputProps,
  AntInputRef,
  ICustomProps,
  IDefaultProps,
} from './types.ts';
import { useStyleConfig } from './useStyleConfig.tsx';
import { cn } from '../../utils/tailwindMerge';

type IProps = (ICustomProps | IDefaultProps) &
  AntInputProps &
  React.RefAttributes<AntInputRef>;

const InternalInput: React.ForwardRefExoticComponent<IProps> = forwardRef(
  ({ size = 'middle', className, ...rest }, ref) => {
    const { themeConfig } = useStyleConfig(rest);
    return (
      <ConfigProvider theme={themeConfig}>
        <div className='flex items-center relative'>
          <Input
            ref={ref}
            size={size}
            className={cn('antInput', inputTypographySizes[size], className)}
            {...rest}
          />
          {rest?.loading && <div>Loading...</div>}
        </div>
      </ConfigProvider>
    );
  },
);

InternalInput.displayName = 'InternalInput';

export default InternalInput;
