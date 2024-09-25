import AntCardGrid from './AntCardGrid.tsx';
import AntCardMeta from './AntCardMeta.tsx';
import InternalCard from './InternalCard.tsx';

type CompoundedComponent = typeof InternalCard & {
  Grid: typeof AntCardGrid;
  Meta: typeof AntCardMeta;
};

const AntCard = InternalCard as CompoundedComponent;
AntCard.Grid = AntCardGrid;
AntCard.Meta = AntCardMeta;

export type { AntCardGridProps, AntCardMetaProps, AntCardProps } from './types.ts';

export default AntCard;
