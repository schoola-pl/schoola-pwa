import { Route, Routes } from 'react-router-dom';
import routes from 'routes';

const Root = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={<route.Component />} />
      ))}
    </Routes>
  );
};

export default Root;
