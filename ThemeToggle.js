import { useEffect, useState } from "react";
import Sun from "../assets/icons/Sun.svg";
import Moon from "../assets/icons/Moon.svg";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <button onClick={toggleTheme} className="text-white ml-5">
      <img src={isDarkMode ? Sun : Moon} alt={isDarkMode ? "Light Theme" : "Dark Theme"} className="h-20 w-auto" />
    </button>
  );
};

export default ThemeToggle;
