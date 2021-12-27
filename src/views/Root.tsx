import StyleProvider from 'providers/StyleProvider';
import { Routes, Route } from 'react-router-dom';
import TestRoute from 'views/TestRoute';

const Root = () => {
  return (
    <StyleProvider>
      <Routes>
        <Route path="/" element={<TestRoute />} />
      </Routes>
    </StyleProvider>
  );
};

export default Root;
