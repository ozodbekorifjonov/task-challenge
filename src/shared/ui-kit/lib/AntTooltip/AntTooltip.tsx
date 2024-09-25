import { Tooltip } from 'antd';

import { AntTooltipProps } from './types.ts';

type IProps = AntTooltipProps;

const AntTooltip = (props: IProps) => {
  return <Tooltip {...props} />;
};

export default AntTooltip;
