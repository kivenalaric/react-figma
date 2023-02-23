import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Packages from './Pages/Packages/Packages';
import Gallery from './Pages/Gallery/Gallery';
import Contact from './Pages/ContactUs/ContactUs';
import { ThemeProvider, themeObject } from './contexts/theme.context';

function App() {
  const [theme, setTheme] = useState('light');
  const themeColor = themeObject[theme];
  return (
    <ThemeProvider value={[themeObject[theme], setTheme]}>
      <div
        className="App"
        style={{ color: themeColor.color, background: themeColor.background }}
      >
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contactus" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
