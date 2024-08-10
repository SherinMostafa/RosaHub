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

  return null;
};

const AppRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <Content />
    </Router>
  );
};

const Content = () => {
  const location = useLocation();

  const hideNavbarPaths = ['/Register', '/Login'];
  const hideFooterPaths = ['/Register', '/Login'];

  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);
  const shouldHideFooter = hideFooterPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && (
        <div className='pb-16'>
          <Navbar />
        </div>
      )}
      <Routes>
        {Pages.map((page) => (
          <Route
            key={page.name}
            path={page.path}
            element={page.element}
          />
        ))}
      </Routes>
      {!shouldHideFooter && <Footer />}
    </>
  );
};

export default AppRouter;
