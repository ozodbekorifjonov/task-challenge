import { iconColors } from '../constants/iconColors';

export enum IconName {
  PieChart = 'pie-chart',
  ApiIntegration = 'api-integration',
  // Add more icon names here
}

export type IconColor = keyof typeof iconColors;
