import { Layout } from 'antd';

import type { AntSiderProps } from './types.ts';

type IProps = AntSiderProps;

const AntSider = (props: IProps) => {
  return <Layout.Sider {...props} />;
};

export default AntSider;
