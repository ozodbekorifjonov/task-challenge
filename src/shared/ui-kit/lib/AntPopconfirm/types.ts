import { PopconfirmProps } from 'antd';

import { popconfirmButtonThemes } from './theme.ts';

export type AntPopconfirmProps = PopconfirmProps & {
  confirmButtonColor?: keyof typeof popconfirmButtonThemes;
};
