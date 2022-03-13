import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import StyleProvider from './StyleProvider';
import { Provider } from 'react-redux';
import store from '../store';
import { RouteProvider } from 'hooks/useRoutesControl';
import { AppLoadingProvider } from 'hooks/useAppLoading';
import { UserProvider } from 'hooks/useUser';
import { ClassProvider } from 'hooks/useClass';
import { ModalProvider } from 'hooks/useModal';
import { SpottedProvider } from 'hooks/useSpotted';
import { PostProvider } from 'hooks/usePost';
import { AvatarProvider } from 'hooks/useAvatar';
import { MeetingProvider } from 'hooks/useMeeting';

const AppProviders: React.FC = ({ children }) => {
  return (
    <Router>
      <Provider store={store}>
        <AvatarProvider>
          <AppLoadingProvider>
            <PostProvider>
              <SpottedProvider>
                <ModalProvider>
                  <MeetingProvider>
                    <RouteProvider>
                      <ClassProvider>
                        <UserProvider>
                          <StyleProvider>{children}</StyleProvider>
                        </UserProvider>
                      </ClassProvider>
                    </RouteProvider>
                  </MeetingProvider>
                </ModalProvider>
              </SpottedProvider>
            </PostProvider>
          </AppLoadingProvider>
        </AvatarProvider>
      </Provider>
    </Router>
  );
};

export default AppProviders;
