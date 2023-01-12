import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Packages from './Pages/Packages/Packages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
