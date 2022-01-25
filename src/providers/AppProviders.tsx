import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import StyleProvider from './StyleProvider';
import { Provider } from 'react-redux';
import store from '../store';
import { RouteProvider } from 'hooks/useRoutesControl';
import { AppLoadingProvider } from 'hooks/useAppLoading';
import { UserProvider } from 'hooks/useUser';
import { ClassProvider } from 'hooks/useClass';

const AppProviders: React.FC = ({ children }) => {
  return (
    <Router>
      <Provider store={store}>
        <AppLoadingProvider>
          <RouteProvider>
            <ClassProvider>
              <UserProvider>
                <StyleProvider>{children}</StyleProvider>
              </UserProvider>
            </ClassProvider>
          </RouteProvider>
        </AppLoadingProvider>
      </Provider>
    </Router>
  );
};

export default AppProviders;
