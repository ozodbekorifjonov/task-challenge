import { createBrowserHistory } from 'history';

import AppRoutes from './routes';
import CustomRouter from './routes/CustomRouter.tsx';

const history = createBrowserHistory();

function App() {
  return (
    <CustomRouter history={history}>
      <AppRoutes />
    </CustomRouter>
  );
}

export default App;
