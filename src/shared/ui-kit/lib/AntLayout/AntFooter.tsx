import { Layout } from 'antd';

import type { AntLayoutProps } from './types.ts';

type IProps = AntLayoutProps;

const AntFooter = (props: IProps) => {
  return <Layout.Footer {...props} />;
};

export default AntFooter;
