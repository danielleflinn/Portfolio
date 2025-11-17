import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { AboutPage } from './pages/AboutPage';
import { InlineMenuPage } from './pages/InlineMenuPage';
import { ExtensionPage } from './pages/ExtensionPage';
import { DesignSystemPage } from './pages/DesignSystemPage';
import { ScrollToTop } from './components/ScrollToTop';
export function AppRouter() {
  return <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/inline-menu" element={<InlineMenuPage />} />
        <Route path="/extension" element={<ExtensionPage />} />
        <Route path="/design-system" element={<DesignSystemPage />} />
      </Routes>
    </BrowserRouter>;
}