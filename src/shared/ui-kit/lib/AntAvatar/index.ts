import AntAvatarGroup from './AntAvatarGroup.tsx';
import InternalAvatar from './InternalAvatar.tsx';

type CompoundedComponent = typeof InternalAvatar & {
  Group: typeof AntAvatarGroup;
};

const AntAvatar = InternalAvatar as CompoundedComponent;
AntAvatar.Group = AntAvatarGroup;

export type { AntAvatarGroupProps, AntAvatarProps } from './types.ts';
export default AntAvatar;
