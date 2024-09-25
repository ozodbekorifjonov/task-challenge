import AntBadgeRibbon from './AntBadgeRibbon.tsx';
import InternalBadge from './InternalBadge.tsx';

type CompoundedComponent = typeof InternalBadge & {
  Ribbon: typeof AntBadgeRibbon;
};

const AntBadge = InternalBadge as CompoundedComponent;
AntBadge.Ribbon = AntBadgeRibbon;

export type { AntBadgeProps, AntBadgeRibbonProps } from './types.ts';
export default AntBadge;
