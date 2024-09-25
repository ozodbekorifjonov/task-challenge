import { ItemType, MenuItemType } from 'antd/es/menu/interface';

import { MenuProps, MenuRef } from 'antd';

import AntMenuDivider from './AntMenuDivider.tsx';
import AntMenuItem from './AntMenuItem.tsx';
import AntMenuItemGroup from './AntMenuItemGroup.tsx';
import AntMenuSubMenu from './AntMenuSubMenu.tsx';
import InternalMenu from './InternalMenu.tsx';

type ComponentProps = MenuProps & React.RefAttributes<MenuRef>;
type GenericItemType<T = unknown> = T extends infer U extends MenuItemType
  ? unknown extends U
    ? ItemType
    : ItemType<U>
  : ItemType;
type GenericComponentProps<T = unknown> = Omit<ComponentProps, 'items'> & {
  items?: GenericItemType<T>[];
};
type CompoundedComponent =
  React.ForwardRefExoticComponent<GenericComponentProps> & {
    Item: typeof AntMenuItem;
    SubMenu: typeof AntMenuSubMenu;
    Divider: typeof AntMenuDivider;
    ItemGroup: typeof AntMenuItemGroup;
  };

interface GenericComponent extends Omit<CompoundedComponent, ''> {
  <T extends MenuItemType>(
    props: GenericComponentProps<T>,
  ): ReturnType<CompoundedComponent>;
}

const AntMenu = InternalMenu as GenericComponent;
AntMenu.Item = AntMenuItem;
AntMenu.SubMenu = AntMenuSubMenu;
AntMenu.Divider = AntMenuDivider;
AntMenu.ItemGroup = AntMenuItemGroup;

export type {
  AntMenuProps,
  AntSubMenuProps,
  AntDividerProps,
  AntMenuItemProps,
} from './types.ts';

export default AntMenu;
