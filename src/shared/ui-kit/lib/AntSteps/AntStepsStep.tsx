import { Steps } from 'antd';

import type { AntStepsProps } from './types.ts';

type IProps = AntStepsProps;

const AntStepsStep = (props: IProps) => {
  return <Steps.Step {...props} />;
};

export default AntStepsStep;
