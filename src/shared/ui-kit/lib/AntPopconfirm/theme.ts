import { COLORS } from '../../../../theme/index.es.ts';

export const popconfirmButtonThemes = {
  brand90: {
    colorPrimary: COLORS.brand90,
    colorPrimaryHover: COLORS.brand100,
    colorPrimaryActive: COLORS.brand100,
  },
  link100: {
    colorPrimary: COLORS.link100,
    colorPrimaryHover: COLORS.link90,
    colorPrimaryActive: COLORS.link90,
  },
  success100: {
    colorPrimary: COLORS.success100,
    colorPrimaryHover: COLORS.success90,
    colorPrimaryActive: COLORS.success90,
  },
  warning100: {
    colorPrimary: COLORS.warning100,
    colorPrimaryHover: COLORS.warning90,
    colorPrimaryActive: COLORS.warning90,
  },
  error100: {
    colorPrimary: COLORS.error100,
    colorPrimaryHover: COLORS.error90,
    colorPrimaryActive: COLORS.error90,
  },
};

export const getPopconfirmButtonTheme = (
  confirmButtonColor: keyof typeof popconfirmButtonThemes,
) => {
  return {
    primaryColor: COLORS.white100,
    primaryShadow: COLORS.transparent,
    colorBgContainerDisabled: COLORS.gray100,
    colorTextDisabled: COLORS.neutral30,
    borderColorDisabled: COLORS.transparent,
    dangerColor: COLORS.error100,
    defaultBorderColor: COLORS.neutral10,
    defaultColor: COLORS.neutral100,
    defaultHoverBorderColor: COLORS.neutral100,
    defaultHoverColor: COLORS.neutral100,
    ...popconfirmButtonThemes[confirmButtonColor],
  };
};
