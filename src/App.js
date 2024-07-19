import React, { useState, useEffect } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import AppRouter from './Router/router';

const App = () => {
  const [loading, setLoading] = useState(true); // Set loading to true initially

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 4500));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className='flex items-center justify-center h-screen'>
          <PropagateLoader color="#02ec88" height={6} width={178} />
        </div>
      ) : (
        <AppRouter />
      )}
    </>
  );
};

export default App;
