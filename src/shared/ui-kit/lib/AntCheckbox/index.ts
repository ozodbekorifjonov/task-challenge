import AntCheckboxGroup from './AntCheckboxGroup.tsx';
import InternalCheckbox from './InternalCheckbox.tsx';

type CompoundedComponent = typeof InternalCheckbox & {
  Group: typeof AntCheckboxGroup;
};

const AntCheckbox = InternalCheckbox as CompoundedComponent;
AntCheckbox.Group = AntCheckboxGroup;

export type { AntCheckboxGroupProps, AntCheckboxProps } from './types.ts';

export default AntCheckbox;
