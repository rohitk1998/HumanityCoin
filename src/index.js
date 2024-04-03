import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import './i18n';
import { BrowserRouter } from 'react-router-dom';
import { InternetConnectionWraper } from './Components/internetConnectionWraper';
import 'antd/dist/antd.min.css';
import { Web3ModalProvider } from './Components/Layout/AppLayout/providerWalletConnect';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persister, store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <InternetConnectionWraper>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
          <Web3ModalProvider>
            <App />
          </Web3ModalProvider>
      </PersistGate>
      </Provider>
    </InternetConnectionWraper>
  </BrowserRouter>
);
