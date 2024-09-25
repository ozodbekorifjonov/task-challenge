import { Navigate, Route, Routes } from 'react-router-dom';

import { goodsRoutes } from './routes';
import { renderRoutes } from '../../renderRoutes.tsx';

const GoodsRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/dashboard/goods/list' />} />
      {renderRoutes(goodsRoutes)}
    </Routes>
  );
};

export default GoodsRoutes;
