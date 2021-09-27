import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import store from './store/store';
import NotesPage from './pages/NotesPage';

const Container = () => (
  <StoreProvider store={store}>
    <PaperProvider>
      <NotesPage />
    </PaperProvider>
  </StoreProvider>
);

export default Container;
