import { Card } from 'antd';

import type { AntCardMetaProps } from './types.ts';

type IProps = AntCardMetaProps;

const AntCardMeta = (props: IProps) => {
  return <Card.Meta {...props} />;
};

export default AntCardMeta;
