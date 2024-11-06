import { useEffect, useState } from "react";
import SunIcon from "@/icons/sun.svg";
import MoonIcon from "@/icons/moon.svg";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDarkScheme ? 'dark' : 'light';
      setTheme(initialTheme);
      document.documentElement.setAttribute('data-theme', initialTheme);
    }

    // Remove the theme-transition class on initial load
    document.body.classList.remove('theme-transition');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Add the theme-transition class to the body
    document.body.classList.add('theme-transition');

    // Remove the class after the transition duration
    setTimeout(() => {
      document.body.classList.remove('theme-transition');
    }, 300); // Match the duration of the transition in CSS
  };

  return (
    <button onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'dark' ? (
        <SunIcon className="w-4 h-4" />
      ) : (
        <MoonIcon className="w-4 h-4" />
      )}
    </button>
  );
};

export default ThemeToggle;