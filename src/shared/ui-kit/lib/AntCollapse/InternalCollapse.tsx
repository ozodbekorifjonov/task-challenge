import { Collapse } from 'antd';

import type { AntCollapseProps } from './types.ts';

type IProps = AntCollapseProps;

const InternalCollapse = (props: IProps) => {
  return <Collapse {...props} />;
};

export default InternalCollapse;
