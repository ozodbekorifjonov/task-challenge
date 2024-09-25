import AntStepsStep from './AntStepsStep.tsx';
import InternalSteps from './InternalSteps.tsx';

type CompoundedComponent = typeof InternalSteps & {
  Steps: typeof AntStepsStep;
};

const AntSteps = InternalSteps as CompoundedComponent;
AntSteps.Steps = AntStepsStep;

export type { AntStepsProps } from './types.ts';
export default AntSteps;
