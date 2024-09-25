import { Modal } from 'antd';

import exitButton from './exitButton.svg';
import type { AntModalProps } from './types.ts';
import { AntdButton } from '../AntdButton';

type IProps = AntModalProps;

const InternalModal = (props: IProps) => {
  return (
    <Modal
      {...props}
      closeIcon={
        <AntdButton
          type='ghost'
          size='small'
          icon={<img src={exitButton} width={24} height={24} alt='' />}
          className='rounded-full min-w-[2.5rem]'
        />
      }
    />
  );
};

export default InternalModal;
