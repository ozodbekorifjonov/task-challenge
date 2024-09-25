import { COLORS } from '../../../../theme/index.es.ts';

import { AntInputProps, AntInputThemeUnion } from './types.ts';

export const inputThemes: Record<string, Record<string, string | number>> = {
  gray: {
    activeBg: COLORS.gray100,
    activeBorderColor: COLORS.brand90,
    activeShadow: COLORS.gray100,
    hoverBorderColor: COLORS.neutral10,
    hoverBg: COLORS.gray100,
    colorBgContainer: COLORS.gray100,
    colorBorder: COLORS.gray100,
  },
};

export const getInputTheme = (theme?: AntInputThemeUnion) => {
  let themes = {
    paddingInline: 12,
    paddingInlineLG: 16,
    paddingBlock: 11,
    paddingBlockLG: 15,
    lineHeight: 1,
    lineHeightLG: 1,
    borderRadius: 12,
    borderRadiusLG: 12,
  };
  if (theme) {
    themes = { ...themes, ...inputThemes[theme] };
  }
  return themes;
};

export const antInputThemes: Array<AntInputThemeUnion> = ['gray'];

export const inputTypographySizes: Record<
  NonNullable<AntInputProps['size']>,
  string
> = {
  small: 'text-p3',
  middle: 'text-p2 leading-[150%]',
  large: 'text-p1 leading-[150%]',
};
