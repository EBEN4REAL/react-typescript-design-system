import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './store';

import CssBaseline from '@mui/material/CssBaseline'; // MUI reset
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import { ToastProvider } from './components/Toast/ToastProvider';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <CssBaseline />
          <ToastProvider>
            <App />
          </ToastProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
);
