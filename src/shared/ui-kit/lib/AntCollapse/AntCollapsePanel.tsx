import { Collapse } from 'antd';

import type { AntCollapsePanelProps } from './types.ts';

type IProps = AntCollapsePanelProps;

const AntCollapsePanel = (props: IProps) => {
  return <Collapse.Panel {...props} />;
};

export default AntCollapsePanel;
