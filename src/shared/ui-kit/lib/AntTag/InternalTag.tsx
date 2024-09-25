import './antTag.css';
import { Tag } from 'antd';

import type { AntTagProps } from './types.ts';
import { hexToRgb } from '../../utils/hexToRgb.ts';
import { cn } from '../../utils/tailwindMerge';

interface IDefaultProps extends AntTagProps {
  custom?: false;
}

const defaultColor = '#1AB759';
interface ICustomProps extends AntTagProps {
  custom?: true;
  color: `#${string}`;
}

type IProps = IDefaultProps | ICustomProps;

const InternalTag = ({
  className,
  color = defaultColor,
  style = {},
  custom,
  ...rest
}: IProps) => {
  if (custom && !color.startsWith('#')) {
    throw new Error('Color needs to start with #');
  }

  if (custom) {
    Object.assign(style, {
      '--tag-color': color,
      '--tag-color-rgb': hexToRgb(color),
    });
  }

  return (
    <Tag
      className={cn(
        custom ? 'px-3 py-[0.44rem] flex items-center gap-2 w-max antTag' : '',
        className,
      )}
      color={custom ? undefined : color}
      style={style}
      {...rest}
    />
  );
};

export default InternalTag;
