import React, { createContext, useContext } from 'react';

interface AppLoadingContextTypes {
  setAppLoading: (state: boolean) => void;
  updateLoadingText: (text: string) => void;
  isAppLoading: boolean;
  appLoadingText: string;
}

const AppLoadingContext = createContext<AppLoadingContextTypes>({
  setAppLoading: () => {
    throw new Error('AppLoadingContext.setAppLoading is not implemented!');
  },
  updateLoadingText: () => {
    throw new Error('AppLoadingContext.updateLoadingText is not implemented!');
  },
  isAppLoading: false,
  appLoadingText: ''
});
export const AppLoadingProvider: React.FC = ({ children }) => {
  const [isLoading, setLoadingState] = React.useState(false);
  const [loadingText, setLoadingText] = React.useState('Poczekaj chwilkę...');

  const setAppLoading = (state: boolean) => {
    updateLoadingText('Poczekaj chwilkę...');
    setLoadingState(state);
  };
  const updateLoadingText = (text: string) => setLoadingText(text);

  const values = {
    setAppLoading,
    updateLoadingText,
    isAppLoading: isLoading,
    appLoadingText: loadingText
  };
  return <AppLoadingContext.Provider value={values}>{children}</AppLoadingContext.Provider>;
};

export const useAppLoading = (): AppLoadingContextTypes => {
  const AppLoading = useContext(AppLoadingContext);
  if (!AppLoading) {
    throw new Error('useAppLoading must be used within an AppLoadingProvider');
  }
  return AppLoading;
};
