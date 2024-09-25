import { Badge } from 'antd';

import type { AntBadgeRibbonProps } from './types.ts';

type IProps = AntBadgeRibbonProps;

const AntBadgeRibbon = (props: IProps) => {
  return <Badge.Ribbon {...props} />;
};

export default AntBadgeRibbon;
