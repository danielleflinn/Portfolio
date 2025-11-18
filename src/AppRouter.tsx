import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { AboutPage } from './pages/AboutPage';
import { BitwardenAutofillExperiencePage } from './pages/BitwardenAutofillExperiencePage';
import { BitwardenExtensionRedesignPage } from './pages/BitwardenExtensionRedesignPage';
import { BitwardenDesignSystemPage } from './pages/BitwardenDesignSystemPage';
import { ScrollToTop } from './components/ScrollToTop';
export function AppRouter() {
  return <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/bitwarden-autofill-experience" element={<BitwardenAutofillExperiencePage />} />
        <Route path="/bitwarden-extension-redesign" element={<BitwardenExtensionRedesignPage />} />
        <Route path="/bitwarden-design-system" element={<BitwardenDesignSystemPage />} />
      </Routes>
    </BrowserRouter>;
}