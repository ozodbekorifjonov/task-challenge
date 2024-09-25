import { Typography } from 'antd';

import type { AntTypographyLinkProps } from './types.ts';

type IProps = AntTypographyLinkProps;

const AntTypographyLink = (props: IProps) => {
  return <Typography.Link {...props} />;
};

export default AntTypographyLink;
