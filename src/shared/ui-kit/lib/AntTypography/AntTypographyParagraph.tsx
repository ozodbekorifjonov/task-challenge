import { Typography } from 'antd';

import type { AntTypographyParagraphProps } from './types.ts';

type IProps = AntTypographyParagraphProps;

const AntTypographyParagraph = (props: IProps) => {
  return <Typography.Paragraph {...props} />;
};

export default AntTypographyParagraph;
