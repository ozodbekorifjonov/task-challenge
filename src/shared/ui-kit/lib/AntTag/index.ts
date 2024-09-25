import AntCheckableTag from './AntCheckableTag.tsx';
import InternalTag from './InternalTag.tsx';

type CompoundedComponent = typeof InternalTag & {
  CheckableTag: typeof AntCheckableTag;
};

const AntTag = InternalTag as CompoundedComponent;
AntTag.CheckableTag = AntCheckableTag;

export type { AntCheckableTagProps, AntTagProps } from './types.ts';
export default AntTag;
