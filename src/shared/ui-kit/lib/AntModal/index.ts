import { Modal } from 'antd';

import InternalModal from './InternalModal.tsx';

type CompoundedComponent = typeof InternalModal & {
  error: typeof Modal.error;
};

const AntModal = InternalModal as CompoundedComponent;

export type { AntModalProps } from './types.ts';
export default AntModal;
