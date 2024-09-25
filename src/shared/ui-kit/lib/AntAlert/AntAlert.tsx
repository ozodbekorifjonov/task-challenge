import { Alert } from 'antd';

import { AntAlertProps } from './types.ts';

type IProps = AntAlertProps;

const AntAlert = (props: IProps) => {
  return <Alert {...props} />;
};

export default AntAlert;
