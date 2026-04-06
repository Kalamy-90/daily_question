import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './Router.jsx';
import '@/index.css';
import { LanguageProvider } from './lib/LanguageContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <AppRouter />
    </LanguageProvider>
  </React.StrictMode>
);
