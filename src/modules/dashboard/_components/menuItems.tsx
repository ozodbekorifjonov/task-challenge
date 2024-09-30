import { paths } from '../../../routes/paths';
import MenuItemLabel from './MenuItemLabel.tsx';
import { Icon, IconName, IconSize } from '../../../icons/src';

export const menuItems = [
  {
    key: paths.dashboard.statistics,
    icon: <Icon name={IconName.PieChart} size={IconSize.Lg} className='icon' />,
    label: (
      <MenuItemLabel href={paths.dashboard.statistics} value='Statistics' />
    ),
  },
];
