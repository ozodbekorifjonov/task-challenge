import type { AntButtonTypeUnion } from './types.ts';
import { COLORS } from '../../../../theme/index.es.ts';

export const buttonThemes: Record<
  AntButtonTypeUnion,
  Record<string, string>
> = {
  primary: {
    primaryColor: COLORS.white100,
    primaryShadow: COLORS.transparent,
    colorPrimary: COLORS.brand90,
    colorPrimaryHover: COLORS.brand100,
    colorPrimaryActive: COLORS.brand100,
    colorBgContainerDisabled: COLORS.gray100,
    colorTextDisabled: COLORS.neutral30,
    borderColorDisabled: COLORS.transparent,
    dangerColor: COLORS.error100,
  },
  secondary: {
    defaultBorderColor: COLORS.neutral10,
    defaultColor: COLORS.neutral100,
    defaultHoverBorderColor: COLORS.neutral100,
    defaultHoverColor: COLORS.neutral100,
    borderColorDisabled: COLORS.neutral10,
    colorTextDisabled: COLORS.neutral30,
    dangerColor: COLORS.error100,
  },
  tertiary: {
    primaryColor: COLORS.white100,
    primaryShadow: COLORS.transparent,
    colorPrimary: COLORS.neutral90,
    colorPrimaryHover: COLORS.neutral100,
    colorPrimaryActive: COLORS.neutral100,
    colorBgContainerDisabled: COLORS.gray100,
    colorTextDisabled: COLORS.neutral30,
    borderColorDisabled: COLORS.transparent,
    dangerColor: COLORS.error100,
  },
  ghost: {
    colorTextLightSolid: COLORS.neutral100,
    primaryColor: COLORS.neutral100,
    primaryShadow: COLORS.transparent,
    colorPrimary: COLORS.gray100,
    colorPrimaryHover: COLORS.neutral8,
    colorPrimaryActive: COLORS.gray100,
    colorBgContainerDisabled: COLORS.gray100,
    colorTextDisabled: COLORS.neutral30,
    borderColorDisabled: COLORS.transparent,
    dangerColor: COLORS.error100,
  },
  text: {
    colorText: COLORS.neutral100,
    textHoverBg: COLORS.gray100,
    colorBgTextActive: COLORS.gray100,
    colorBgContainerDisabled: COLORS.gray100,
    colorTextDisabled: COLORS.neutral30,
    dangerColor: COLORS.error100,
  },
  link: {
    primaryColor: COLORS.white100,
    primaryShadow: COLORS.transparent,
    colorPrimary: COLORS.brand90,
    colorPrimaryHover: COLORS.brand100,
    colorPrimaryActive: COLORS.brand100,
    colorBgContainerDisabled: COLORS.gray100,
    colorTextDisabled: COLORS.neutral30,
    borderColorDisabled: COLORS.transparent,
  },
  // Primary types which change only color
  success: {
    primaryColor: COLORS.white100,
    primaryShadow: COLORS.transparent,
    colorPrimary: COLORS.success100,
    colorPrimaryHover: COLORS.success90,
    colorPrimaryActive: COLORS.success90,
    colorBgContainerDisabled: COLORS.gray100,
    colorTextDisabled: COLORS.neutral30,
    borderColorDisabled: COLORS.transparent,
    dangerColor: COLORS.error100,
  },

  // TODO: Need to remove these types  after fixing UI
  default: {
    primaryColor: COLORS.white100,
    primaryShadow: COLORS.transparent,
    colorPrimary: COLORS.brand90,
    colorPrimaryHover: COLORS.brand100,
    colorPrimaryActive: COLORS.brand100,
    colorBgContainerDisabled: COLORS.gray100,
    colorTextDisabled: COLORS.neutral30,
    borderColorDisabled: COLORS.transparent,
    dangerColor: COLORS.error100,
  },
};

export const getButtonTheme = (type?: AntButtonTypeUnion) => {
  let themes = {
    controlHeightSM: 40,
    controlHeight: 48,
    controlHeightLG: 56,
    borderRadiusSM: 8,
    borderRadius: 12,
    borderRadiusLG: 12,
    paddingInlineSM: 16,
    paddingInline: 16,
    paddingInlineLG: 20,
    paddingBlockSM: 0,
    paddingBlock: 0,
    paddingBlockLG: 0,
    opacityLoading: 0.5,
  };
  if (type) {
    themes = { ...themes, ...buttonThemes[type] };
  }
  return themes;
};

export const antButtonThemes: Array<AntButtonTypeUnion> = [
  'text',
  'link',
  'ghost',
  'primary',
  'secondary',
  'success',
  'tertiary',
  'text',
  // TODO: Need to remove these types  after fixing UI
  'default',
];
