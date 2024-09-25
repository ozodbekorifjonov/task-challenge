import React, { HTMLProps } from 'react';

import { Spin } from 'antd';

import { FullSizeCenteredFlexBox } from '../styled.ts';

type IProps = Pick<HTMLProps<HTMLElement>, 'className'>;

const contentStyle: React.CSSProperties = {
  padding: 50,
  background: 'rgba(0, 0, 0, 0.05)',
  borderRadius: 4,
};

const content = <div style={contentStyle} />;

function Loading({ className }: IProps) {
  return (
    <FullSizeCenteredFlexBox className={className}>
      <Spin tip='Loading' size='large'>
        {content}
      </Spin>
    </FullSizeCenteredFlexBox>
  );
}

export default Loading;
