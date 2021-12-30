import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import StyleProvider from './StyleProvider';
import { Provider } from 'react-redux';
import store from '../store';
import { RouteProvider } from '../hooks/useRoutes';

const AppProviders: React.FC = ({ children }) => {
  return (
    <Router>
      <Provider store={store}>
        <RouteProvider>
          <StyleProvider>{children}</StyleProvider>
        </RouteProvider>
      </Provider>
    </Router>
  );
};

export default AppProviders;
