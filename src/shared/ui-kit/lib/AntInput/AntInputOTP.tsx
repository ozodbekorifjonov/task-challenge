import { Input } from 'antd';

import type { AntOTPProps } from './types.ts';

type IProps = AntOTPProps;

const AntInputOTP = (props: IProps) => {
  return <Input.OTP {...props} />;
};

export default AntInputOTP;
