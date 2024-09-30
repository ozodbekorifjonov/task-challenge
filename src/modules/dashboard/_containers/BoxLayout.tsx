import { theme } from 'antd';
import React from 'react';

import { DASHBOARD_CONFIG } from '../_constants/dashboardConstants';
import { AntLayout } from '../../../shared/ui-kit';

const { Content } = AntLayout;

type IProps = {
  children?: React.ReactNode;
};

const BoxLayout = ({ children }: IProps) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <AntLayout
      style={{
        marginLeft: DASHBOARD_CONFIG.sidebarWidth,
        overflow: 'hidden',
        minHeight: '100dvh',
        maxHeight: '100dvh',
        position: 'fixed',
        right: 0,
        top: 0,
        bottom: 0,
        width: `calc(100% - ${DASHBOARD_CONFIG.sidebarWidth}px)`,
      }}
    >
      <Content
        id='body'
        className='relative overflow-y-auto custom-scrollbar xl:mx-8 xl:mb-8 xl:px-8 xl:pb-8 mx-4 mb-4 px-4 py-4 pb-4'
        style={{
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        {children}
      </Content>
    </AntLayout>
  );
};

export default BoxLayout;
