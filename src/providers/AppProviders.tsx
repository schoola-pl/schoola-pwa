import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import StyleProvider from './StyleProvider';

const AppProviders: React.FC = ({ children }) => {
  return (
    <Router>
      <StyleProvider>{children}</StyleProvider>
    </Router>
  );
};

export default AppProviders;
