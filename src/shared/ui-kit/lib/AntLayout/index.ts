import AntContent from './AntContent.tsx';
import AntFooter from './AntFooter.tsx';
import AntHeader from './AntHeader.tsx';
import AntSider from './AntSider.tsx';
import InternalLayout from './InternalLayout.tsx';

type CompoundedComponent = typeof InternalLayout & {
  Content: typeof AntContent;
  Header: typeof AntHeader;
  Footer: typeof AntFooter;
  Sider: typeof AntSider;
};

const AntLayout = InternalLayout as CompoundedComponent;
AntLayout.Content = AntContent;
AntLayout.Header = AntHeader;
AntLayout.Footer = AntFooter;
AntLayout.Sider = AntSider;

export type { AntLayoutProps, AntSiderProps } from './types.ts';

export default AntLayout;
