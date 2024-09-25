import { Typography } from 'antd';

import type { AntTypographyTextProps } from './types.ts';

type IProps = AntTypographyTextProps;

const AntTypographyText = (props: IProps) => {
  return <Typography.Text {...props} />;
};

export default AntTypographyText;
