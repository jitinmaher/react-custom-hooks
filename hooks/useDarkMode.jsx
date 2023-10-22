import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Effect to persist dark mode state in local storage
  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode === 'true') {
      setIsDarkMode(true);
    } else if (storedDarkMode === 'false') {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    // Update local storage when dark mode changes
    localStorage.setItem('darkMode', isDarkMode.toString());

    // Add or remove a CSS class to enable or disable dark mode
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
