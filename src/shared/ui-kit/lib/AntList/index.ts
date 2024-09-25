import AntListItem from './AntListItem.tsx';
import InternalList from './InternalList.tsx';

type CompoundedComponent = typeof InternalList & {
  Item: typeof AntListItem;
};

const AntList = InternalList as CompoundedComponent;
AntList.Item = AntListItem;

export type { AntListItemProps, AntListProps } from './types.ts';

export default AntList;
