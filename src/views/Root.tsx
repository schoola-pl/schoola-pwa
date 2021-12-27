import StyleProvider from 'providers/StyleProvider';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

const Root = () => (
  <Router>
    <StyleProvider>
      <Routes>
        <h1>dupa</h1>
      </Routes>
    </StyleProvider>
  </Router>
);

export default Root;
