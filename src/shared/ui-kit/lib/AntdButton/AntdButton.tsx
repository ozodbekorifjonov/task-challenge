import './antdButton.css';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonProps, ConfigProvider } from 'antd';

import { antButtonThemes, getButtonTheme } from './theme.ts';
import type { AntButtonProps, AntButtonTypeUnion } from './types.ts';
import { cn } from '../../utils/tailwindMerge';

const buttonTypes: Record<AntButtonTypeUnion, ButtonProps['type']> = {
  primary: 'primary',
  secondary: 'default',
  tertiary: 'primary',
  ghost: 'primary',
  text: 'text',
  link: 'primary',
  success: 'primary',
  // TODO: Need to remove these types  after fixing UI
  default: 'primary',
} as const;

const buttonTypographySizes: Record<
  NonNullable<AntButtonProps['size']>,
  string
> = {
  small: 'button-h3-medium',
  middle: 'button-h2-medium',
  large: 'button-h2-medium',
};
const AntdButton: React.FC<AntButtonProps> = ({
  type = 'primary',
  children,
  href,
  className,
  size = 'middle',
  ...rest
}) => {
  const WrapperComponent = useMemo(() => {
    if (type === 'link' && href) {
      return ({ children }: { children: React.ReactNode }) => (
        <Link to={String(href)}>{children}</Link>
      );
    }
    return ({ children }: { children: React.ReactNode }) => <>{children}</>;
  }, [href, type]);

  if (type === 'link' && !href) {
    throw new Error(
      'Attribute "href" is required if you want to use Link Button',
    );
  }

  const themeConfig = useMemo(() => {
    if (!antButtonThemes.includes(type)) {
      throw new Error('Theme type is wrong');
    }
    const buttonStyles = getButtonTheme(type);
    return {
      components: {
        Button: buttonStyles,
      },
    };
  }, [type]);

  return (
    <ConfigProvider theme={themeConfig}>
      <WrapperComponent>
        <Button
          type={buttonTypes[type]}
          className={cn(buttonTypographySizes[size], type, className)}
          size={size}
          {...rest}
        >
          {children}
        </Button>
      </WrapperComponent>
    </ConfigProvider>
  );
};

export default AntdButton;
