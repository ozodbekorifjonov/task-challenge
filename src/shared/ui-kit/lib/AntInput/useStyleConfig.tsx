import { useMemo } from 'react';

import { antInputThemes, getInputTheme } from './theme.ts';
import { ICustomProps, IDefaultProps } from './types.ts';

export const useStyleConfig = ({
  custom = true,
  theme = 'gray',
}: ICustomProps | IDefaultProps) => {
  if (custom && !theme) {
    throw Error('Add theme atribute if you want to use custom Input');
  }

  const themeConfig = useMemo(() => {
    if (custom && theme) {
      if (!antInputThemes.includes(theme)) {
        throw new Error('Theme type is wrong');
      }

      const inputStyles = getInputTheme(theme);

      return {
        components: {
          Input: inputStyles,
        },
      };
    }
    return {};
  }, [custom, theme]);

  return {
    themeConfig,
  };
};
