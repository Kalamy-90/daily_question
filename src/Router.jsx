import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import TermsOfService from './components/legal/TermsOfService';
import PrivacyPolicy from './components/legal/PrivacyPolicy';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/conditions-utilisation" element={<TermsOfService />} />
        <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

