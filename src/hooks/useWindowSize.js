import { useEffect, useState } from 'react';

export const useWindowSize = () => {
  const [dimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener('resize', () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });
  }, []);
  return dimension;
};
