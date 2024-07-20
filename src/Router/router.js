import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Pages } from '../Constants';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null; // This component doesn't render anything
};

const AppRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className='pb-16'>
        <Navbar />
      </div>
      <Routes>
        {Pages.map((page) => (
          <Route
            key={page.name}
            path={page.path}
            element={page.element}
          />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
