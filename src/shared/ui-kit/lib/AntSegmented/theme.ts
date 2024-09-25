import { COLORS } from '../../../../theme/index.es.ts';

import type { AntSegmentedTypeUnion } from './types.ts';

export const segmentedThemes: Record<
  AntSegmentedTypeUnion,
  Record<string, string>
> = {
  white: {
    trackBg: COLORS.white100,
    itemSelectedBg: COLORS.gray100,
  },
  gray: {
    trackBg: COLORS.gray100,
    itemSelectedBg: COLORS.white100,
  },
};

export const getSegmentedTheme = (type?: AntSegmentedTypeUnion) => {
  let themes = {
    itemColor: COLORS.neutral100,
    trackPadding: 4,
    borderRadiusLG: 8,
    borderRadius: 8,
    borderRadiusSM: 8,
    trackBg: COLORS.white100,
    itemSelectedBg: COLORS.gray100,
  };
  if (type) {
    themes = { ...themes, ...segmentedThemes[type] };
  }
  return themes;
};

export const antButtonThemes: Array<AntSegmentedTypeUnion> = ['gray', 'white'];
