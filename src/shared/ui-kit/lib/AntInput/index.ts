import AntInputGroup from './AntInputGroup.tsx';
import AntInputOTP from './AntInputOTP.tsx';
import AntInputPassword from './AntInputPassword.tsx';
import AntInputSearch from './AntInputSearch.tsx';
import AntInputTextArea from './AntInputTextArea.tsx';
import InternalInput from './InternalInput.tsx';

type CompoundedComponent = typeof InternalInput & {
  Group: typeof AntInputGroup;
  Search: typeof AntInputSearch;
  TextArea: typeof AntInputTextArea;
  Password: typeof AntInputPassword;
  OTP: typeof AntInputOTP;
};

const AntInput = InternalInput as CompoundedComponent;
AntInput.Group = AntInputGroup;
AntInput.Search = AntInputSearch;
AntInput.TextArea = AntInputTextArea;
AntInput.Password = AntInputPassword;
AntInput.OTP = AntInputOTP;

export type {
  AntGroupProps,
  AntInputProps,
  AntOTPProps,
  AntPasswordProps,
  AntSearchProps,
  AntTextAreaProps,
  AntInputRef,
} from './types.ts';

export default AntInput;
