import AntSelectOptGroup from './AntSelectOptGroup.tsx';
import AntSelectOption from './AntSelectOption.tsx';
import InternalSelect from './InternalSelect.tsx';

type CompoundedComponent = typeof InternalSelect & {
  Option: typeof AntSelectOption;
  OptGroup: typeof AntSelectOptGroup;
};

const AntSelect = InternalSelect as CompoundedComponent;
AntSelect.Option = AntSelectOption;
AntSelect.OptGroup = AntSelectOptGroup;

export type {
  AntSelectOptGroupProps,
  AntSelectOptionProps,
  AntSelectProps,
} from './types.ts';
export default AntSelect;
