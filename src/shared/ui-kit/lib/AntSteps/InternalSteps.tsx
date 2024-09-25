import { Steps } from 'antd';

import type { AntStepsProps } from './types.ts';

type IProps = AntStepsProps;

const InternalSteps = (props: IProps) => {
  return <Steps {...props} />;
};

export default InternalSteps;
