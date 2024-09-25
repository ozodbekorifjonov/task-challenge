import { Typography } from 'antd';

import type { AntTypographyTitleProps } from './types.ts';

type IProps = AntTypographyTitleProps;

const AntTypographyTitle = (props: IProps) => {
  return <Typography.Title {...props} />;
};

export default AntTypographyTitle;
