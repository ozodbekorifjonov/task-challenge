import { ConfigProvider, Switch } from 'antd';

import { AntSwitchProps } from './types.ts';

type IProps = AntSwitchProps & {
  color?: string;
};

const AntSwitch = ({ color, ...rest }: IProps) => {
  const theme = color
    ? {
        token: {
          colorPrimary: color,
        },
      }
    : undefined;
  return (
    <ConfigProvider theme={theme}>
      <Switch {...rest} />
    </ConfigProvider>
  );
};

export default AntSwitch;
