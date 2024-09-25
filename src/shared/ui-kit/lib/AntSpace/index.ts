import AntSpaceCompact from './AntSpaceCompact.tsx';
import InternalSpace from './InternalSpace.tsx';

type CompoundedComponent = typeof InternalSpace & {
  Compact: typeof AntSpaceCompact;
};

const AntSpace = InternalSpace as CompoundedComponent;
AntSpace.Compact = AntSpaceCompact;

export type { AntSpaceCompactProps, AntSpaceProps } from './types.ts';
export default AntSpace;
