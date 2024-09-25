import AntRadioButton from './AntRadioButton.tsx';
import AntRadioGroup from './AntRadioGroup.tsx';
import InternalRadio from './InternalRadio.tsx';

type CompoundedComponent = typeof InternalRadio & {
  Button: typeof AntRadioButton;
  Group: typeof AntRadioGroup;
};

const AntRadio = InternalRadio as CompoundedComponent;
AntRadio.Button = AntRadioButton;
AntRadio.Group = AntRadioGroup;

export type {
  AntRadioButtonProps,
  AntRadioGroupProps,
  AntRadioProps,
} from './types.ts';

export default AntRadio;
