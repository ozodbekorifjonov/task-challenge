import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import './main.css';
import ReduxProvider from './store/ReduxProvider.tsx';
import { AntdProvider } from './shared/ui-kit';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider>
      <StrictMode>
        <AntdProvider>
          <App />
        </AntdProvider>
      </StrictMode>
    </ReduxProvider>
  </StrictMode>,
);
