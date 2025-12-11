// src/components/SwipeHandler.jsx

// under development, rn unavailable 


import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const navLinks = ['/', '/about', '/projects', '/certs'];

const SwipeHandler = ({ children }) => {
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const currentIndex = navLinks.indexOf(location.pathname);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const delta = touchStartX.current - touchEndX.current;

    if (Math.abs(delta) > 50) {
      if (delta > 0 && currentIndex < navLinks.length - 1) {
        navigate(navLinks[currentIndex + 1]);
      } else if (delta < 0 && currentIndex > 0) {
        navigate(navLinks[currentIndex - 1]);
      }
    }
  };

  useEffect(() => {
    const container = document.getElementById('swipe-container');
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentIndex]);

  return <div id="swipe-container">{children}</div>;
};

export default SwipeHandler;