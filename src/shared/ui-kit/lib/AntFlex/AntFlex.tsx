import { Flex } from 'antd';

import { AntFlexProps } from './types.ts';

type IProps = AntFlexProps;

const AntFlex = (props: IProps) => {
  return <Flex {...props} />;
};

export default AntFlex;
