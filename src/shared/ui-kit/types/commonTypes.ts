import React, { ComponentType, LazyExoticComponent } from 'react';

import { ColumnsType } from 'antd/es/table';

import { SkeletonProps } from 'antd';

export type { AntMenuProps, AntSubMenuProps } from '../lib/AntMenu';
export type { AntTableProps, AntTableColumnsType } from '../lib/AntTable';
export type { AntListItemProps, AntListProps } from '../lib/AntList';
export type { AntPopoverProps } from '../lib/AntPopover';
export type { AntDividerProps } from '../lib/AntDivider';
export type { AntQRCodeProps } from '../lib/AntQRCode';
export type { AntInputNumberProps } from '../lib/AntInputNumber';
export type {
  AntSkeletonAvatarProps,
  AntSkeletonButtonProps,
  AntSkeletonImageProps,
  AntSkeletonInputProps,
  AntSkeletonNodeProps,
  AntSkeletonProps,
} from '../lib/AntSkeleton';
export type {
  AntGroupProps,
  AntInputProps,
  AntOTPProps,
  AntPasswordProps,
  AntSearchProps,
  AntTextAreaProps,
  AntInputRef,
} from '../lib/AntInput';
export type { AntAvatarGroupProps, AntAvatarProps } from '../lib/AntAvatar';
export type {
  AntTypographyLinkProps,
  AntTypographyParagraphProps,
  AntTypographyProps,
  AntTypographyTextProps,
  AntTypographyTitleProps,
} from '../lib/AntTypography';
export type {
  AntRadioProps,
  AntRadioButtonProps,
  AntRadioGroupProps,
} from '../lib/AntRadio';
export type { AntSpinProps } from '../lib/AntSpin';
export type { AntFlexProps } from '../lib/AntFlex';
export type { AntTooltipProps } from '../lib/AntTooltip';
export type { AntAlertProps } from '../lib/AntAlert';
export type { AntModalProps } from '../lib/AntModal';
export type {
  AntCascaderProps,
  AntDefaultOptionType,
} from '../lib/AntCascader';
export type {
  AntCheckboxGroupProps,
  AntCheckboxProps,
} from '../lib/AntCheckbox';
export type { AntBadgeProps, AntBadgeRibbonProps } from '../lib/AntBadge';
export type { AntSwitchProps } from '../lib/AntSwitch';
export type { AntBreadcrumbProps } from '../lib/AntBreadcrumb';
export type { AntDropdownProps } from '../lib/AntDropdown';
export type { AntImageProps } from '../lib/AntImage';
export type { AntLayoutProps, AntSiderProps } from '../lib/AntLayout';
export type { AntPopconfirmProps } from '../lib/AntPopconfirm';
export type { AntSpaceCompactProps, AntSpaceProps } from '../lib/AntSpace';
export type { AntTagProps, AntCheckableTagProps } from '../lib/AntTag';
export type { AntButtonProps } from '../lib/AntdButton';
export type { AntDrawerProps } from '../lib/AntDrawer';
export type { AntSegmentedProps } from '../lib/AntSegmented';
export type { AntRowProps } from '../lib/AntRow';
export type { AntColProps } from '../lib/AntCol';
export type { AntStepsProps } from '../lib/AntSteps';
export type { AntEmptyProps } from '../lib/AntEmpty';
export type {
  AntCollapsePanelProps,
  AntCollapseProps,
} from '../lib/AntCollapse';
export type {
  AntCardGridProps,
  AntCardMetaProps,
  AntCardProps,
} from '../lib/AntCard';
export type {
  AntSliderRangeProps,
  AntSliderSingleProps,
} from '../lib/AntSlider';
export type {
  AntSelectOptGroupProps,
  AntSelectOptionProps,
  AntSelectProps,
} from '../lib/AntSelect';
export type {
  AntFormErrorListProps,
  AntFormItemProps,
  AntFormListProps,
  AntFormProps,
  AntFormProviderProps,
  AntFormInstance,
} from '../lib/AntForm';

export interface CustomTabElement {
  label: React.ReactNode | string;
  path: string;
  disabled?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: LazyExoticComponent<ComponentType<any>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props?: any;
}

export interface CustomTabProps {
  elements: CustomTabElement[];
  withPath?: boolean;
  className?: string;
  defaultTab?: string;
  basePathname?: string;
  routerKey?: string;
}

export type SkeletonTableColumnsType = {
  key: string;
};

export type SkeletonTableProps = SkeletonProps & {
  columns: ColumnsType<SkeletonTableColumnsType>;
  rowCount?: number;
};
