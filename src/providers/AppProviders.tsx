import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import StyleProvider from './StyleProvider';
import { Provider } from 'react-redux';
import store from '../store';
import { RouteProvider } from '../hooks/useRoutesControl';
import { AppLoadingProvider } from '../hooks/useAppLoading';

const AppProviders: React.FC = ({ children }) => {
  return (
    <Router>
      <Provider store={store}>
        <AppLoadingProvider>
          <RouteProvider>
            <StyleProvider>{children}</StyleProvider>
          </RouteProvider>
        </AppLoadingProvider>
      </Provider>
    </Router>
  );
};

export default AppProviders;
