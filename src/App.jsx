/* eslint-disable react/jsx-no-constructed-context-values */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './Pages/Home/Home';
import Packages from './Pages/Packages/Packages';
import Gallery from './Pages/Gallery/Gallery';
import Contact from './Pages/ContactUs/ContactUs';
import MyContext from './contexts/contexts';
import About from './Pages/About/About';
import StickyBar from './Components/StickyBar/StickyBar';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/footer';

function App() {
  // const [theme, setTheme] = useState('light');
  // const themeColor = themeObject[theme];
  const [openMenu, setOpenMenu] = useState(false);
  const toogleMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <MyContext.Provider value={{ openMenu, toogleMenu }}>
      <div
        className="App"
        // style={{ color: themeColor.color, background: themeColor.background }}
      >
        <BrowserRouter>
          <StickyBar />
          <NavBar />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contactus" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </MyContext.Provider>
  );
}

export default App;
