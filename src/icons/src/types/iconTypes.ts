import { iconColors } from '../constants/iconColors';

export enum IconName {
  PieChart = 'pie-chart',
  ApiIntegration = 'api-integration',
  Search = 'search',
  // Add more icon names here
}

export type IconColor = keyof typeof iconColors;
