import { useIntl } from 'react-intl';

import { DASHBOARD_CONFIG } from '../_constants/dashboardConstants';

import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';

type IProps = {
  children?: React.ReactNode;
};

export default function DashboardLayout({
  children,
}: IProps): React.JSX.Element {
  const { locale } = useIntl();

  return (
    <Layout style={{ minHeight: '100vh' }} className='relative'>
      <Sider
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
        <img
          width={250}
          height={65}
          alt='logo-openmarket'
          className='my-4 px-8 dashboard-logo w-full'
          src={`/images/logo-${locale}.svg`}
        />
        <div
          className='overflow-y-auto remove-scrollbar  relative'
          id='menuList'
          style={{
            maxHeight: 'calc(100% - 136px)',
            minHeight: 'calc(100% - 136px)',
          }}
        >
          <div className='menuShadow'></div>
        </div>
      </Sider>
      {children}
    </Layout>
  );
}
