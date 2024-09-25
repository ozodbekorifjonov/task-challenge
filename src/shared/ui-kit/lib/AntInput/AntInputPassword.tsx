import { ConfigProvider, Input } from 'antd';

import type { AntPasswordProps, ICustomProps, IDefaultProps } from './types.ts';
import { useStyleConfig } from './useStyleConfig.tsx';

type IProps = (ICustomProps | IDefaultProps) & AntPasswordProps;

const AntInputPassword = (props: IProps) => {
  const { themeConfig } = useStyleConfig(props);

  return (
    <ConfigProvider theme={themeConfig}>
      <Input.Password {...props} />
    </ConfigProvider>
  );
};

export default AntInputPassword;
