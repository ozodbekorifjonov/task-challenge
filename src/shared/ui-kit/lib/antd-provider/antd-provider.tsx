import './antProvider.css';
import * as React from 'react';
import { ReactNode } from 'react';

import { ConfigProvider } from 'antd';

import { COLORS } from '../../../../theme/index.es.ts';

interface AntdProps {
  children: ReactNode;
}

const AntdProvider: React.FC<AntdProps> = ({ children }) => {
  const modalContainerRef = React.useRef<HTMLDivElement>(null);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#713FA1',
          borderRadius: 8,
          fontFamily: 'Inter',
        },
        components: {
          Menu: {
            colorPrimary: COLORS.neutral80,
            darkItemBg: COLORS.neutral100,
            darkGroupTitleColor: COLORS.white100,
            darkItemHoverBg: COLORS.neutral90,
            darkItemSelectedBg: COLORS.neutral80,
            fontSize: 14,
            controlHeightLG: 44,
          },
          Layout: {
            siderBg: COLORS.neutral100,
          },
          Tree: {
            nodeHoverBg: 'transpanret',
            nodeSelectedBg: 'transpanret',
          },
          Breadcrumb: {
            fontSize: 32,
            linkHoverColor: COLORS.neutral100,
            colorBgTextHover: 'transparent',
          },
          Table: {
            headerBorderRadius: 16,
            headerBg: COLORS.gray50,
          },
          Avatar: {
            groupOverlapping: 4,
            colorTextLightSolid: COLORS.neutral100,
            colorTextPlaceholder: COLORS.gray100,
          },
          DatePicker: {
            activeBg: COLORS.gray100,
            activeBorderColor: COLORS.brand90,
            activeShadow: COLORS.gray100,
            hoverBorderColor: COLORS.neutral10,
            hoverBg: COLORS.gray100,
            colorBgContainer: COLORS.gray100,
            colorBorder: COLORS.gray100,
          },
          Drawer: {
            colorSplit: 'transparent',
            padding: 0,
          },
          Modal: {
            padding: 32,
          },
        },
      }}
      getPopupContainer={() => modalContainerRef.current as HTMLElement}
    >
      <div ref={modalContainerRef}></div>
      {children}
    </ConfigProvider>
  );
};

export default AntdProvider;
