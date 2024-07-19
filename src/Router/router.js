import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Pages } from '../Constants';
import Navbar from '../Layout/Navbar';

const AppRouter = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default AppRouter;