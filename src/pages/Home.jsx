import React, { useEffect } from 'react';
import Layout from './components/Layout';
import { fetchDataAndStore } from './utils/dataStorage';
import { StoreProvider } from './context/GlobalContext';
import Routes from './Routes';
import { BrowserRoouter as Router } from 'react-rouonter-dom';

const App = () => {
  useEffect(() => {
    fetchDataAndStore();
  }, []);

  return (
    <StoreProvider>
      <Layout />
    </StoreProvider>
  );
};

export default App;