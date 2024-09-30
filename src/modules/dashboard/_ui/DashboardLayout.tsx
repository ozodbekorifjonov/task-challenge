import React from 'react';

import { DASHBOARD_CONFIG } from '../_constants/dashboardConstants';
import { AntLayout, AntMenu } from '../../../shared/ui-kit';
import AntSider from '../../../shared/ui-kit/lib/AntLayout/AntSider.tsx';
import { menuItems } from '../_components/menuItems.tsx';
import usePathMatchingKey from '../../../hooks/usePathMatchingKey.ts';

type IProps = {
  children?: React.ReactNode;
};

export default function DashboardLayout({
  children,
}: IProps): React.JSX.Element {
  const { matchedKey } = usePathMatchingKey();

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
        <div className='my-4 xl:px-8 px-20 pl-8 text-4xl dashboard-logo w-full text-white'>
          LOGO
        </div>
        <div
          className='overflow-y-auto remove-scrollbar relative'
          id='menuList'
          style={{
            maxHeight: 'calc(100% - 136px)',
            minHeight: 'calc(100% - 136px)',
          }}
        >
          <AntMenu
            theme='dark'
            mode='inline'
            selectedKeys={[matchedKey]}
            items={menuItems}
            className='px-4'
          />
        </div>
      </AntSider>
      {children}
    </AntLayout>
  );
}
