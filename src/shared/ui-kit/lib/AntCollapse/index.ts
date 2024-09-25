import AntCollapsePanel from './AntCollapsePanel.tsx';
import InternalCollapse from './InternalCollapse.tsx';

type CompoundedComponent = typeof InternalCollapse & {
  Panel: typeof AntCollapsePanel;
};

const AntCollapse = InternalCollapse as CompoundedComponent;
AntCollapse.Panel = AntCollapsePanel;

export type { AntCollapsePanelProps, AntCollapseProps } from './types.ts';

export default AntCollapse;
