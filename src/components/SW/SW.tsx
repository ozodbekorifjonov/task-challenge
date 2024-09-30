import { useCallback, useEffect } from 'react';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import { useRegisterSW } from 'virtual:pwa-register/react';
import { notification } from 'antd';

import { AntdButton } from '../../shared/ui-kit';

function SW() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  const close = useCallback(() => {
    setOfflineReady(false);
    setNeedRefresh(false);
    notification.destroy('needRefresh');
  }, [setOfflineReady, setNeedRefresh]);

  useEffect(() => {
    const handleOffline = () => {
      notification.error({
        key: 'offline',
        message: 'No Internet connection',
        duration: 0,
      });
    };

    const handleOnline = () => {
      notification.destroy('offline');
      notification.success({
        key: 'online',
        message: 'Internet connection restored',
        duration: 3,
      });
    };

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);

    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  useEffect(() => {
    if (offlineReady) {
      notification.open({
        key: 'offlineReady',
        message: 'Offline mode',
        duration: 4.5,
        onClose: () => setOfflineReady(false),
      });
    } else if (needRefresh) {
      notification.open({
        key: 'needRefresh',
        message:
          'There are new changes in the application. Click the reload button to update.',
        duration: 0,
        btn: (
          <div>
            <AntdButton
              size='small'
              type='default'
              onClick={() => updateServiceWorker(true)}
            >
              Reload
            </AntdButton>
            <AntdButton
              size='small'
              danger
              onClick={close}
              style={{ marginLeft: 8 }}
            >
              Close
            </AntdButton>
          </div>
        ),
        onClose: () => setNeedRefresh(false),
      });
    }
  }, [
    close,
    needRefresh,
    offlineReady,
    updateServiceWorker,
    setNeedRefresh,
    setOfflineReady,
  ]);

  return null;
}

export default SW;
