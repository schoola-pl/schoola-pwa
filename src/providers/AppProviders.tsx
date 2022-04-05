import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import StyleProvider from './StyleProvider';
import { Provider } from 'react-redux';
import store from '../store';
import { AppLoadingProvider } from 'hooks/useAppLoading';
import { UserProvider } from 'hooks/useUser';
import { ClassProvider } from 'hooks/useClass';
import { ModalProvider } from 'hooks/useModal';
import { SpottedProvider } from 'hooks/useSpotted';
import { PostProvider } from 'hooks/usePost';
import { AvatarProvider } from 'hooks/useAvatar';
import { MeetingProvider } from 'hooks/useMeeting';
import { AuthProvider } from '../hooks/useAuth';
import { NotificationProvider } from '../hooks/useNotification';

const AppProviders: React.FC = ({ children }) => {
  return (
    <Router>
      <Provider store={store}>
        <NotificationProvider>
          <AvatarProvider>
            <AppLoadingProvider>
              <ModalProvider>
                <AuthProvider>
                  <PostProvider>
                    <SpottedProvider>
                      <MeetingProvider>
                        <ClassProvider>
                          <UserProvider>
                            <StyleProvider>{children}</StyleProvider>
                          </UserProvider>
                        </ClassProvider>
                      </MeetingProvider>
                    </SpottedProvider>
                  </PostProvider>
                </AuthProvider>
              </ModalProvider>
            </AppLoadingProvider>
          </AvatarProvider>
        </NotificationProvider>
      </Provider>
    </Router>
  );
};

export default AppProviders;
