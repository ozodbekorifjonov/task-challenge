import { Drawer } from 'antd';

import exitButton from './exitButton.svg';
import type { AntDrawerProps } from './types.ts';
import { AntdButton } from '../AntdButton';

type IProps = AntDrawerProps;

const CustomTitle = ({
  title,
  closable,
  onClose,
}: Pick<AntDrawerProps, 'title' | 'onClose' | 'closable'>) => {
  return (
    <div className='flex items-center justify-between pt-6 gap-4'>
      <div className='tab-h1-semibold w-full'>{title}</div>
      {closable && (
        <AntdButton
          type='ghost'
          size='small'
          icon={<img src={exitButton} width={24} height={24} alt='' />}
          className='rounded-full'
          onClick={onClose}
        />
      )}
    </div>
  );
};

const AntDrawer = ({ title, closable = true, ...rest }: IProps) => {
  return (
    <Drawer
      {...rest}
      closable={false}
      title={
        <CustomTitle title={title} onClose={rest.onClose} closable={closable} />
      }
    />
  );
};

export default AntDrawer;
