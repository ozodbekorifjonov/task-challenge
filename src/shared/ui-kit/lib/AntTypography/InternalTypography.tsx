import { forwardRef } from 'react';

import { Typography } from 'antd';

import type { InternalTypographyProps } from './types.ts';

const InternalTypography: React.ForwardRefExoticComponent<
  InternalTypographyProps<keyof JSX.IntrinsicElements> &
    React.RefAttributes<HTMLElement>
> = forwardRef((props, ref) => {
  return <Typography {...props} ref={ref} />;
});

InternalTypography.displayName = 'InternalTypography';

export default InternalTypography;
