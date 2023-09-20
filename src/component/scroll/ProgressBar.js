import React, { useEffect, useState } from 'react';
import "./progress.css"

function ProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop;
      
      const newScrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollPercentage(newScrollPercentage);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${scrollPercentage}%` }}></div>
    </div>
  );
}

export default ProgressBar;
