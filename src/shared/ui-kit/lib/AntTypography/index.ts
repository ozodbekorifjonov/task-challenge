import AntTypographyLink from './AntTypographyLink.tsx';
import AntTypographyParagraph from './AntTypographyParagraph.tsx';
import AntTypographyText from './AntTypographyText.tsx';
import AntTypographyTitle from './AntTypographyTitle.tsx';
import InternalTypography from './InternalTypography.tsx';

type CompoundedComponent = typeof InternalTypography & {
  Link: typeof AntTypographyLink;
  Text: typeof AntTypographyText;
  Title: typeof AntTypographyTitle;
  Paragraph: typeof AntTypographyParagraph;
};

const AntTypography = InternalTypography as CompoundedComponent;
AntTypography.Link = AntTypographyLink;
AntTypography.Text = AntTypographyText;
AntTypography.Title = AntTypographyTitle;
AntTypography.Paragraph = AntTypographyParagraph;

export type {
  AntTypographyProps,
  AntTypographyLinkProps,
  AntTypographyParagraphProps,
  AntTypographyTextProps,
  AntTypographyTitleProps,
} from './types.ts';
export default AntTypography;
