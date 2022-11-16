import { useRoutes } from 'react-router-dom';
import ShowProduct from '../components/ShowProduct';
import Home from './Home';

const Router = () => {
  const elements = useRoutes([
    { path: '/', element: <Home />, children: [] },
    { path: '/product/:id', element: <ShowProduct />, children: [] },
  ]);

  return elements;
};

export default Router;
