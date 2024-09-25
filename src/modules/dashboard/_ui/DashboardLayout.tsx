import React from 'react';

import { DASHBOARD_CONFIG } from '../_constants/dashboardConstants';
import { AntLayout } from '../../../shared/ui-kit';
import AntSider from '../../../shared/ui-kit/lib/AntLayout/AntSider.tsx';

type IProps = {
  children?: React.ReactNode;
};

export default function DashboardLayout({
  children,
}: IProps): React.JSX.Element {
  return (
    <AntLayout style={{ minHeight: '100vh' }} className='relative'>
      <AntSider
        trigger={null}
        collapsible
        width={DASHBOARD_CONFIG.sidebarWidth}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
        className='remove-scrollbar'
      >
        <div
          className='overflow-y-auto remove-scrollbar  relative'
          id='menuList'
          style={{
            maxHeight: 'calc(100% - 136px)',
            minHeight: 'calc(100% - 136px)',
          }}
        />
      </AntSider>
      {children}
    </AntLayout>
  );
}
