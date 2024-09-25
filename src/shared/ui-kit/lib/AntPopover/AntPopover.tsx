import { ReactNode } from 'react';

import { Popover } from 'antd';

import type { AntPopoverProps } from './types.ts';

type IProps = AntPopoverProps & {
  title?: string | ReactNode;
  onClose?: () => void;
};

const PopoverTitle = ({
  title,
  onClose,
}: Pick<IProps, 'title' | 'onClose'>) => {
  return (
    <div className='flex items-center justify-between'>
      <p className='text-p3'>{title}</p>
      {onClose && typeof onClose === 'boolean' && (
        <button type='button' onClick={onClose}>
          <img
            src="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.33474 4.33486C4.78105 3.88854 5.50467 3.88854 5.95098 4.33486L12 10.3839L18.049 4.33486C18.4953 3.88854 19.219 3.88854 19.6653 4.33486C20.1116 4.78117 20.1116 5.50479 19.6653 5.9511L13.6162 12.0001L19.6653 18.0491C20.1116 18.4955 20.1116 19.2191 19.6653 19.6654C19.219 20.1117 18.4953 20.1117 18.049 19.6654L12 13.6164L5.95098 19.6654C5.50467 20.1117 4.78105 20.1117 4.33474 19.6654C3.88842 19.2191 3.88842 18.4955 4.33474 18.0491L10.3838 12.0001L4.33474 5.9511C3.88842 5.50479 3.88842 4.78117 4.33474 4.33486Z' fill='%23A5A5A5'/%3E%3C/svg%3E"
            width={18}
            height={18}
            alt='closebutton'
          />
        </button>
      )}
    </div>
  );
};

const AntPopover = ({ title, onClose, ...rest }: IProps) => {
  const customTitle = !onClose ? (
    title
  ) : (
    <PopoverTitle title={title} onClose={onClose} />
  );
  return <Popover {...rest} title={customTitle} />;
};

export default AntPopover;
