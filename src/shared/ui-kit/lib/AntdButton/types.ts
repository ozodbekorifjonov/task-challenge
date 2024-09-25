import type { ButtonProps } from 'antd';

export type AntButtonTypeUnion =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'ghost'
  | 'text'
  | 'success'
  | 'link'
  // TODO: Need to remove these types  after fixing UI
  | 'default';

export type AntButtonBaseProps = Omit<ButtonProps, 'type'> & { theme?: string };

interface AntButtonDefaultProps extends AntButtonBaseProps {
  type?: Exclude<AntButtonTypeUnion, 'link'>;
  href?: never;
}

interface AntButtonLinkProps extends AntButtonBaseProps {
  type: 'link';
  href: string;
}

export type AntButtonProps = AntButtonLinkProps | AntButtonDefaultProps;
