import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { AboutPage } from './pages/AboutPage';
export function AppRouter() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>;
}