import { Layout } from 'antd';

import { AntLayoutProps } from './types.ts';

type IProps = AntLayoutProps;

const InternalLayout = (props: IProps) => {
  return <Layout {...props} />;
};

export default InternalLayout;
