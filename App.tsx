import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ServiceGallery from './components/ServiceGallery';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery/:id" element={<ServiceGallery />} />
      </Routes>
    </HashRouter>
  );
};

export default App;