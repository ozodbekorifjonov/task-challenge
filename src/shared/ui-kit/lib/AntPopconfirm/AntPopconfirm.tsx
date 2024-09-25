import { useMemo } from 'react';

import { ConfigProvider, Popconfirm } from 'antd';

import { getPopconfirmButtonTheme, popconfirmButtonThemes } from './theme.ts';
import type { AntPopconfirmProps } from './types.ts';

type IProps = AntPopconfirmProps;

const AntPopconfirm = ({ confirmButtonColor = 'brand90', ...rest }: IProps) => {
  const themeConfig = useMemo(() => {
    if (
      confirmButtonColor &&
      Object.keys(popconfirmButtonThemes).includes(confirmButtonColor)
    ) {
      return {
        components: {
          Button: getPopconfirmButtonTheme(confirmButtonColor),
        },
      };
    }
    return undefined;
  }, [confirmButtonColor]);
  return (
    <ConfigProvider theme={themeConfig}>
      <Popconfirm {...rest} />
    </ConfigProvider>
  );
};

export default AntPopconfirm;
