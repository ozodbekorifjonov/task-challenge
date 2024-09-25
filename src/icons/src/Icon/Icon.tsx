import { CSSProperties, MouseEvent, ReactElement } from 'react';

import { StyledSpan } from './IconStyles';
import { iconSources } from '../constants/iconSources';
import { IconSize } from '../types/iconSize';
import { IconName } from '../types/iconTypes';

interface IconProps {
  name: IconName;
  onClick?: (event: MouseEvent<HTMLSpanElement>) => void;
  style?: CSSProperties;
  size?: IconSize;
  className?: string;
  ignoresize?: boolean;
}

const sizeMap: Record<IconSize, string> = {
  [IconSize.Xs]: '8px',
  [IconSize.Sm]: '12px',
  [IconSize.Md]: '16px',
  [IconSize.Lg]: '24px',
  [IconSize.Xl]: '32px',
  [IconSize.XXl]: '40px',
};

function Icon({
  name,
  onClick,
  style,
  size = IconSize.Md,
  className,
  ignoresize,
  ...rest
}: IconProps): ReactElement {
  return (
    <StyledSpan
      style={style}
      $width={sizeMap[size]}
      $height={sizeMap[size]}
      $icon={iconSources[name]}
      $ignoreSize={ignoresize}
      onClick={onClick}
      className={`icon ${className}`}
      {...rest}
    />
  );
}

export default Icon;
