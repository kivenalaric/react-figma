import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Packages from './Pages/Packages/Packages';
import Gallery from './Pages/Gallery/Gallery';
import Contact from './Pages/ContactUs/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    // <div className="pages__main">
    //   <Packages />
    // </div>
  );
}

export default App;
