import type { LinkProps } from 'antd/es/typography/Link';
import type { ParagraphProps } from 'antd/es/typography/Paragraph';
import type { TextProps } from 'antd/es/typography/Text';
import type { TitleProps } from 'antd/es/typography/Title';
import type { TypographyProps } from 'antd/es/typography/Typography';

export type AntTypographyProps<C extends keyof JSX.IntrinsicElements> =
  TypographyProps<C>;
export interface InternalTypographyProps<C extends keyof JSX.IntrinsicElements>
  extends AntTypographyProps<C> {
  /** @deprecated Use `ref` directly if using React 16 */
  setContentRef?: (node: HTMLElement) => void;
}
export type AntTypographyLinkProps = LinkProps;
export type AntTypographyParagraphProps = ParagraphProps;
export type AntTypographyTextProps = TextProps;
export type AntTypographyTitleProps = TitleProps;
