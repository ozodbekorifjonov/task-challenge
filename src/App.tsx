import { createBrowserHistory } from 'history';
import { ToastContainer } from 'react-toastify';
import { Fragment } from 'react';

import AppRoutes from './routes';
import CustomRouter from './routes/CustomRouter.tsx';
import 'react-toastify/dist/ReactToastify.css';
import SW from './components/SW';

const history = createBrowserHistory();

function App() {
  return (
    <Fragment>
      <ToastContainer />
      <SW />
      <CustomRouter history={history}>
        <AppRoutes />
      </CustomRouter>
    </Fragment>
  );
}

export default App;
