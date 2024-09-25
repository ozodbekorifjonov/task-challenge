import { Layout } from 'antd';

import type { AntLayoutProps } from './types.ts';

type IProps = AntLayoutProps;

const AntContent = (props: IProps) => {
  return <Layout.Content {...props} />;
};

export default AntContent;
