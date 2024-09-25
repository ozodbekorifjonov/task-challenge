import AntSkeletonAvatar from './AntSkeletonAvatar.tsx';
import AntSkeletonButton from './AntSkeletonButton.tsx';
import AntSkeletonImage from './AntSkeletonImage.tsx';
import AntSkeletonInput from './AntSkeletonInput.tsx';
import AntSkeletonNode from './AntSkeletonNode.tsx';
import InternalSkeleton from './InternalSkeleton.tsx';

type CompoundedComponent = typeof InternalSkeleton & {
  Node: typeof AntSkeletonNode;
  Input: typeof AntSkeletonInput;
  Image: typeof AntSkeletonImage;
  Button: typeof AntSkeletonButton;
  Avatar: typeof AntSkeletonAvatar;
};

const AntSkeleton = InternalSkeleton as CompoundedComponent;
AntSkeleton.Node = AntSkeletonNode;
AntSkeleton.Input = AntSkeletonInput;
AntSkeleton.Image = AntSkeletonImage;
AntSkeleton.Button = AntSkeletonButton;
AntSkeleton.Avatar = AntSkeletonAvatar;

export type {
  AntSkeletonAvatarProps,
  AntSkeletonButtonProps,
  AntSkeletonImageProps,
  AntSkeletonInputProps,
  AntSkeletonNodeProps,
  AntSkeletonProps,
} from './types.ts';

export default AntSkeleton;
