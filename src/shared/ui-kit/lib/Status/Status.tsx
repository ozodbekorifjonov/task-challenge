import './antStatus.css';
import { Tag, TagProps } from 'antd';

import { hexToRgb } from '../../utils/hexToRgb.ts';
import { cn } from '../../utils/tailwindMerge';

const styleBySize = {
  small: 'text-p3 py-[0.44rem] px-3 leading-[1.125rem]',
  middle: 'text-p3 py-[0.69rem] px-3 leading-[1.125rem]',
  large: 'text-p2 py-[0.63rem] px-4 leading-[1.5rem]',
};

const defaultColor = '#1AB759';

interface IPropsWithDot extends TagProps {
  type?: 'withDot';
}

interface IPropsDefault extends TagProps {
  type?: 'default';
  className: string;
}

type IProps = (IPropsWithDot | IPropsDefault) & {
  color: `#${string}`;
  size?: keyof typeof styleBySize;
};

const Status = ({
  className,
  color = defaultColor,
  style = {},
  size = 'middle',
  type = 'withDot',
  ...rest
}: IProps) => {
  if (!color.startsWith('#')) {
    throw new Error('Color needs to start with #');
  }

  if (type === 'default' && !className) {
    throw new Error('Set text color with className atribute');
  }

  Object.assign(style, {
    '--tag-color': color,
    '--tag-color-rgb': hexToRgb(color),
  });

  return (
    <Tag
      className={cn(
        'flex items-center gap-2 w-max webkitStatus',
        styleBySize[size],
        type,
        className,
      )}
      color={undefined}
      style={style}
      {...rest}
    />
  );
};

export default Status;
