import './antdSegmented.css';
import { useMemo } from 'react';

import { ConfigProvider, Segmented } from 'antd';

import { getSegmentedTheme } from './theme.ts';
import type { AntSegmentedProps, AntSegmentedTypeUnion } from './types.ts';
import { cn } from '../../utils/tailwindMerge';

type IProps<T> = AntSegmentedProps<T> & { type?: AntSegmentedTypeUnion };

const styleBySize = {
  small: 'antdSegmentedSmall',
  middle: 'antdSegmentedSmall',
  large: 'antdSegmentedLarge',
};

const AntSegmented = <T,>({
  size = 'middle',
  type = 'gray',
  className,
  ...rest
}: IProps<T>) => {
  const themeConfig = useMemo(() => {
    const segmentedStyles = getSegmentedTheme(type);
    return {
      components: {
        Segmented: segmentedStyles,
      },
    };
  }, [type]);

  return (
    <ConfigProvider theme={themeConfig}>
      <Segmented
        size={size}
        className={cn(styleBySize[size], className)}
        {...rest}
      />
    </ConfigProvider>
  );
};

export default AntSegmented;
