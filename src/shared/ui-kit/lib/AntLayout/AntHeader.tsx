import { Layout } from 'antd';

import type { AntLayoutProps } from './types.ts';

type IProps = AntLayoutProps;

const AntHeader = (props: IProps) => {
  return <Layout.Header {...props} />;
};

export default AntHeader;
