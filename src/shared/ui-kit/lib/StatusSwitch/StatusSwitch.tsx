import { useState } from 'react';

import { COLORS } from '../../../../theme/index.es.ts';

import { cn } from '../../utils/tailwindMerge';
import { AntSwitch, AntSwitchProps } from '../AntSwitch';

const sizeStyles = {
  small: 'h-10 px-4  rounded-[0.5rem]',
  middle: 'h-12 px-5  rounded-[0.75rem]',
};

interface IProps extends Omit<AntSwitchProps, 'size'> {
  text: string;
  isActive?: boolean;
  onChange?: (value: boolean) => void;
  size?: keyof typeof sizeStyles;
}

const StatusSwitch = ({
  text,
  checked: initialChecked,
  onChange,
  size = 'small',
  ...rest
}: IProps) => {
  const [checked, setChecked] = useState(initialChecked || false);

  const handleToggle = (value: boolean) => {
    setChecked(value);
    onChange?.(value);
  };

  const buttonType = checked ? 'bg-success10' : 'bg-gray100';

  return (
    <div
      className={cn(
        ' flex items-center gap-2   button-h3-medium',
        sizeStyles[size],
        buttonType,
      )}
    >
      <AntSwitch
        checked={checked}
        onChange={handleToggle}
        size='small'
        color={COLORS.success100}
        {...rest}
      />
      {text}
    </div>
  );
};

export default StatusSwitch;
